import React from "react";
import Grafica from "../../Components/laGrafica/Grafica";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Widget } from "../../Components/widget/Widget";
import WTable from "../../Components/widgetTable/WTable";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeconteiner">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="homeTable">
          <WTable/>
          <Grafica/>
        </div>
      </div>
    </div>
  );
};

export default Home;
