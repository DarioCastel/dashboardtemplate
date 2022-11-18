import React from 'react'
import "./wtable.scss"

const Button = ({type}) =>{
    return <button className={`widgetButton ${type}`}>{type}</button>
    
}

const WTable = () => {
  return (
    <div className='wTable'> 
        <h3>Ultimas ventas</h3>
        <table className='sellTable'>
            <tr className='tableTrCa'>
                <th className="tableTh">Producto</th>
                <th className="tableTh">Fecha/hora</th>
                <th className="tableTh">Tipo de pago</th>
                <th className="tableTh">Estado</th>
            </tr>
            <tr className='tableTr'>
                <td className='tableTd'>
                    <span>Mesita</span>
                </td>
                <td className='tableTd'>
                    <span>18/11/22||20:03</span>
                </td>
                <td className='tableTd'>
                    <span>Contado</span>
                </td>
                <td className='tableTd'>
                    <Button type="aprobado"/>
                </td>
            </tr>
            <tr className='tableTr'>
                <td className='tableTd'>
                    <span>Ropero</span>
                </td>
                <td className='tableTd'>
                    <span>17/11/22||17:03</span>
                </td>
                <td className='tableTd'>
                    <span>Contado</span>
                </td>
                <td className='tableTd'>
                <Button type="pendiente"/>
                </td>
            </tr>
            <tr className='tableTr'>
                <td className='tableTd'>
                    <span>Cama</span>
                </td>
                <td className='tableTd'>
                    <span>16/11/22||18:23</span>
                </td>
                <td className='tableTd'>
                    <span>Tarjeta</span>
                </td>
                <td className='tableTd'>
                <Button type="pendiente"/>
                </td>
            </tr>

        </table>
    </div>
  )
}

export default WTable