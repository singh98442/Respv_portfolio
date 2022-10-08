import React, { useState } from 'react'
import './Contact.scss'

const Contact = () => {

  const [message, setmessage]= useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();

    setmessage(true)
  }
  return (
    <div  className='contact' id='contact'>
        <div className="wrapper">
          <div className="left">
            <img className='contactimg' src="assets/shake.svg" alt="" />
          </div>
          <div className="right">
            <h1 className='contact'>Contact</h1>
            <div className="formContainer">
              <form action="" onSubmit={handleSubmit}>
                <input placeholder='Enter your email' />
                <textarea placeholder='anything you want to say?'></textarea>
                <button type='submit'>Contact</button>
                {message &&  <span>Soon, we will try to contact you &#128514;</span>}<br/>
              </form>
              
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Contact
