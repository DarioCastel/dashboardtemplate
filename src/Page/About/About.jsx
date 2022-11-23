import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./about.scss"

const About = () => {
  return (
    <>
        <div className='pagAbout'>
      <Sidebar/>
      <div className="conteinerAbout">
      <Navbar/>
      aca va la tabla
      </div>
      
    
    </div>
    </>
  )
}

export default About