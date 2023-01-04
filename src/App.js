import React from 'react';


const App = () => {
  const [company, setCompany] = useState('');
  return (
    <div className='container'>
      <div className='wrapper'>
        <form>
          <label>Company:</label><br/>
          <input type='text' className='company' />
          <br/>
          <label>Name:</label><br/>
          <input type='text' className='name'/>
          <br/>
          <label>Position:</label><br/>
          <input type='text' className='position' placeholder='Backend developer, marketer'/>
          <br/>
          <label>Skills:</label><br/>
          <input type='text' className='skills' placeholder='React, NodeJS'/>
          <br/>
          <label>Experience:</label><br/>
          <input type='number' className='experience'/>
        </form>
        <div className='result'>
          <p>

          </p>
        </div>
      </div>
    </div>
  )
}

export default App