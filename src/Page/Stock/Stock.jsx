import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./stock.scss"

const Stock = () => {
  return (
    <>
        <div className='pagStock'>
      <Sidebar/>
      <div className="conteinerStock">
      <Navbar/>
      aca va la tabla
      </div>
      
    
    </div>
    </>
  )
}

export default Stock