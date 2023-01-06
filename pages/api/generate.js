import { Configuration, OpenAIApi } from 'openai';


export default async function handler(req, res) {
  const { company, experience, skills, name, position } = req.body;

  const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const prompt = `Hello, AI! I'm a cover letter writer and I need your help crafting a perfect 
  letter for a job seeker named ${name}. They're applying to work at ${company} as a ${position}, and they 
  have ${experience} years of experience and the following skills: ${skills}. 
  Can you please write a cover letter that highlights their relevant experience and skills, 
  and explains why they're a great fit for the position? Make it engaging and persuasive, 
  but keep it professional. Thanks!`

    const response = await openai.createCompletion({
      prompt,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: 'text-davinci-003',
    });
  
    res.status(200).send(response.data.choices[0].text)
}
