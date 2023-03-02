
import './App.css';
import React , {useState} from 'react'


function App() {

  const [ value , setValue] = useState({
    firstName : "",
    lastName : "",
    emailAdd : ""
  })

  const [submitted , setSubmitted] = useState(false)
  const [valid , setValid] = useState(false)

  const handleFirstName = (e) => {
    setValue({ ...value, firstName: e.target.value})
  }
  const handleLastName = (e) => {
    setValue({ ...value, lastName: e.target.value})
  }
  const handleEmail = (e) => {
    setValue({ ...value, emailAdd: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(value.firstName && value.lastName && value.emailAdd){
      setValid(true)
    }
    setSubmitted(true)
   
  }

  return (
    <div className="App">
      <form className='input-form' onSubmit={handleSubmit}>

      <div className='inps'>
        {submitted && valid ? <div className='success-message'>Success! Thank you for your register</div> : null}
        
      <input className='inp' type="text" onChange={handleFirstName} placeholder='First Name'/>
      {submitted && !value.firstName ? <span className='msg'>Please enter your first name</span>:null}
      <input className='inp' type="text" onChange={handleLastName} placeholder='Last Name'/>
      {submitted && !value.lastName ? <span className='msg'>Please enter your last name</span>:null}
      <input className='inp' type="email" onChange={handleEmail} placeholder='Email Address'/>
      {submitted && !value.emailAdd ? <span className='msg'>Please enter your email address</span>:null}
      <button className='inp btn'  type="submit">Register</button>
    </div>
      </form>
      </div>
  );
}

export default App;
