import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./clients.scss"

const Clients = () => {
  return (<>
    <div className='pagClients'>
      <Sidebar/>
      <div className="conteinerClient">
      <Navbar/>
      aca va la tabla
      </div>
      
    
    </div>
  </>
  )
}

export default Clients