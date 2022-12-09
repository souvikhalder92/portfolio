import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/about_page.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About Me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>I'm Souvik</h2>
        <p>Hi, my name is Souvik Halder and I am a full-stack web developer with  experience of modern technologies like React js, Node js, Express JS, Mongo DB etc... </p>
        <a href="https://www.linkedin.com/in/souvik-halder-066a90216/?fbclid=IwAR0nO15yIwCU7QhO9qurRHOxdjsIetHuGocWCD9_0bCT5dGXd94fmii_WNg" target="_blank" rel="noopener noreferrer">Hire me</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
