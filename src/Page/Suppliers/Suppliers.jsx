import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./suppliers.scss"

const Suppliers = () => {
  return (
  <>
  <div className='pagSuppliers'>
      <Sidebar/>
      <div className="conteinerSuppliers">
      <Navbar/>
      aca va la tabla
      </div>
      
    
    </div>
  </>
  )
}

export default Suppliers