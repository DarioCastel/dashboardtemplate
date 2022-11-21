import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./list.scss"

const List = () => {
  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listConteiner">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default List;
