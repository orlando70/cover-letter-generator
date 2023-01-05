import { useState, React } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import "./App.css";


const App = () => {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [result, setResult] = useState('');
  const [position, setPosition] = useState('');
  const [experience, setExperience] = useState('');
  const [isloading, setIsloading] = useState(false);

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  async function handleSubmit(e) {
    e.preventDefault()
    setIsloading(true);
    const result = await complete();
    setResult(result);
    setIsloading(false);
  }

  async function complete() {
    const prompt = `You are a cover letter writer. Your will help job seekers write a perfect cover 
    letter. You will use company name as ${company}, work experience as ${experience}, 
    skills as ${skills}, applicant's name as ${name}, job position as ${position}.
    Elaborate on the different skills and their uses and absorb them into the final result.`

    const response = await openai.createCompletion({
      prompt,
      temperature: 0,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: 'text-davinci-003',
    });
    return response.data.choices[0].text;
  }

  function CopyButton({ text }) {
    const handleClick = () => {
      navigator.clipboard.writeText(text);
    };

    return <p style={{fontSize: '13px'}} onClick={handleClick}>Copy to Clipboard</p>;
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <header>
          <p>Generate a <span>Cover Letter</span> in seconds.</p>
        </header>
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <label>Company:</label>
          <input type='text' required onChange={(e) => { setCompany(e.target.value) }} />

          <label>Name:</label>
          <input type='text' required onChange={(e) => { setName(e.target.value) }} />

          <label>Position:</label>
          <input type='text' required onChange={(e) => { setPosition(e.target.value) }} />

          <label>Skills:</label>
          <textarea type='text' required placeholder='Outline all your skills' onChange={(e) => { setSkills(e.target.value) }} />

          <label>Years of Experience:</label>
          <input type='number' required onChange={(e) => { setExperience(e.target.value) }} />

          <button type='submit'>Submit</button>
        </form>
        <div className='result'>
          <div className='copy'>
            {result && <CopyButton text={result} />}
          </div>
          {isloading ? <p>Generating cover letter...</p> : <span style={{ whiteSpace: "pre-wrap" }}> {result}</span>}
        </div>
      </div>
    </div>
  )
}


export default App