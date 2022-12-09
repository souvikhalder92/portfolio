import React from 'react'
import './Contact.css'
import ContactBox from '../../components/ContactBox/ContactBox'

function Contact() {
  return (
    <>
    <div id="Contact" className='contact'>
      <h1>Contact Me</h1>
      <div className="boxes">
        <ContactBox animation="fade-right" class= "fas fa-envelope" name="Email" link="mailto:souvikhalder205@gmail.com"/>
        <ContactBox animation="fade-up" class= "fab fa-github" name="Github" link="https://github.com/souvikhalder92/souvikhalder92"/>
        <ContactBox animation="fade-left" class= "fab fa-linkedin" name="Linkedin" link="https://www.linkedin.com/in/souvik-halder-066a90216/?fbclid=IwAR0nO15yIwCU7QhO9qurRHOxdjsIetHuGocWCD9_0bCT5dGXd94fmii_WNg"/>
      </div>

    </div>
    </>
  )
}

export default Contact
