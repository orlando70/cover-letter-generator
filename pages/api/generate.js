import { Configuration, OpenAIApi } from 'openai';



export default async function handler(req, res) {
  const { company, experience, skills, name, position } = req.body;

  const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const prompt = `You are a cover letter writer. Your will help job seekers write a perfect cover 
    letter. You will use company name as ${company}, work experience as ${experience}, 
    skills as ${skills}, applicant's name as ${name}, job position as ${position}.
    Elaborate on the different skills and efficiently absorb them into the final result. Be creative.`

    const response = await openai.createCompletion({
      prompt,
      temperature: 0,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: 'text-davinci-003',
    });
  
    res.status(200).send(response.data.choices[0].text)
}
