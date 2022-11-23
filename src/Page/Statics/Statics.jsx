import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./statics.scss"

const Statics = () => {
  return (
    <>
        <div className='pagStatics'>
      <Sidebar/>
      <div className="conteinerStatics">
      <Navbar/>
      aca va la tabla
      </div>
      
    
    </div>
    </>
  )
}

export default Statics