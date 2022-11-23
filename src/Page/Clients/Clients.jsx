import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./clients.scss";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../../assets/dbtable";


const columns = [
  { field: "id", headerName: "Nro Client", width: 120 },
  { field: "firstName", headerName: "First name", width: 170,
    renderCell: (params)=>{
        return(
            <div className="contImg">
                <img src={params.row.img} alt="Avatar" className="img"/>
                {params.row.firstName}
            </div>
        );
    }
},
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "adress", headerName: "Adress", width: 180 },
  { field: "email", headerName: "Email", width: 180 },
];

const Clients = () => {
  const actColumn=[
    {field: "button", 
    headerName: "Actions", 
    width: 180,
    renderCell: (params)=>{
      return(
          <div className="contButton">
            <div className="detail">detail</div>
            <div className="delete">delete</div>
          </div>
      );
  }
  }]
  return (
    <>
      <div className="pagClients">
        <Sidebar />
        <div className="conteinerClient">
          <Navbar />
          <div className="contTabClient">
          <h3 className="title">Datos de clientes</h3>
            <div style={{ height: 450, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns.concat(actColumn)}
                pageSize={6}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
