import "./sidebar.scss";
import GiteIcon from "@mui/icons-material/Gite";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PersonIcon from '@mui/icons-material/Person';
import SellIcon from '@mui/icons-material/Sell';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DvrIcon from '@mui/icons-material/Dvr';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import InfoIcon from '@mui/icons-material/Info';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Router,
  Routes,
} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Artesano</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="tittle">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
          <li>
            <GiteIcon className="icon"/>
            <span> Home</span>
          </li>
          </Link>
          <p className="tittle">USERS</p>
          <Link to="/clients" style={{textDecoration:"none"}}>
          <li>
            <PersonIcon className="icon"/>
            <span> Client</span>
          </li>
          </Link>
          <Link to="/suppliers" style={{textDecoration:"none"}}>
          <li>
            <AssignmentIndIcon className="icon"/>
            <span> Suppliers</span>
          </li>
          </Link>
          <p className="tittle">SERVICES</p>
          <Link to="/stock" style={{textDecoration:"none"}}>
          <li>
            <DvrIcon className="icon"/>
            <span> Stock</span>
          </li>
          </Link>
          <Link to="/buys" style={{textDecoration:"none"}}>
          <li>
            <AddShoppingCartIcon className="icon"/>
            <span> Buys</span>
          </li>
          </Link>
          <Link to="/sells" style={{textDecoration:"none"}}>
          <li >
            <SellIcon className="icon"/>
            <span> Sells</span>
          </li>
          </Link>
          <p className="tittle">INFO</p>
          <Link to="/statics" style={{textDecoration:"none"}}>
          <li>
            <EqualizerIcon className="icon"/>
            <span> Statics</span>
          </li>
          </Link>
          <Link to="/about" style={{textDecoration:"none"}}>
          <li>
            <InfoIcon className="icon"/>
            <span> About</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom"> 
        <div className="buttonColor"></div>
        <div className="buttonColor"></div>
      </div>
    </div>
  );
};

export default Sidebar;
