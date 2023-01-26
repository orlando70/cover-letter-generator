import {
    createParser,
} from "eventsource-parser";


export async function OpenAIStream(payload) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    let counter = 0;

    const { company, experience, skills, name, position } = payload.formData;


    const prompt = `Hello, AI! I'm a cover letter writer and I need your help crafting a perfect 
  letter for a job seeker named ${name}. They're applying to work at ${company} as a ${position}, and they 
  have ${experience} years of experience and the following skills: ${skills}. 
  Can you please write a cover letter that highlights their relevant experience and skills, 
  and explains why they're a great fit for the position? Make it engaging and persuasive, 
  but keep it professional. Thanks!`

    const config = {
        prompt,
        temperature: 0.7,
        max_tokens: 600,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        model: 'text-davinci-003',
        stream: true
    }

    const res = await fetch("https://api.openai.com/v1/completions", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPEN_AI_KEY ?? ""}`,
        },
        method: "POST",
        body: JSON.stringify(config),
    })

    const stream = new ReadableStream({
        async start(controller) {
            // callback
            function onParse(event) {
                if (event.type === "event") {
                    const data = event.data;
                    // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
                    if (data === "[DONE]") {
                        controller.close();
                        return;
                    }
                    try {
                        const json = JSON.parse(data);
                        const text = json.choices[0].text;
                        if (counter < 2 && (text.match(/\n/) || []).length) {
                            // this is a prefix character (i.e., "\n\n"), do nothing
                            return;
                        }
                        const queue = encoder.encode(text);
                        controller.enqueue(queue);
                        counter++;
                    } catch (e) {
                        // maybe parse error
                        controller.error(e);
                    }
                }
            }

            // stream response (SSE) from OpenAI may be fragmented into multiple chunks
            // this ensures we properly read chunks and invoke an event for each SSE event stream
            const parser = createParser(onParse);
            // https://web.dev/streams/#asynchronous-iteration
            for await (const chunk of res.body) {
                parser.feed(decoder.decode(chunk));
            }
        },
    });

    return stream;
}
