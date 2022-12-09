import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img1 from  '../../images/img1.png'
import img2 from  '../../images/img2.png'
import img3 from  '../../images/img3.png'
import img4 from  '../../images/img4.png'
import img5 from  '../../images/img5.png'
import img6 from  '../../images/img6.png'
import img7 from  '../../images/img7.png'


function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "Micro Tech(Full-Stack)" img= {img1} link = "https://micro-tech-75402.web.app/"  />
            <ProjectBox title = "Skill Edge" img= {img2} link = "https://skill-edge-e96e0.web.app/"  />
            <ProjectBox title = "Doctors Portal(Full-Stack)" img= {img3} link = "https://doctors-portal-ce211.web.app/"  />
            <ProjectBox title = "Book Rider(Full-Stack)" img= {img4} link = "https://book-rider.web.app/"  />
            <ProjectBox title = "Car Doctor" img= {img5} link = "https://car-doctor-444ed.web.app/"  />
            <ProjectBox title = "Q-Quiz" img= {img6} link = "https://q-quiz.netlify.app/"  />
            <ProjectBox title = "The Daily Star" img= {img7} link = "https://the-daily-star-78848.web.app/"  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
