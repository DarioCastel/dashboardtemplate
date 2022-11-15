import "./sidebar.scss";
import GiteIcon from "@mui/icons-material/Gite";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SellIcon from '@mui/icons-material/Sell';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DvrIcon from '@mui/icons-material/Dvr';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import InfoIcon from '@mui/icons-material/Info';

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
          <li>
            <GiteIcon className="icon"/>
            <span> Home</span>
          </li>
          <p className="tittle">USERS</p>
          <li>
            <PersonIcon className="icon"/>
            <span> Client</span>
          </li>
          <li>
            <AssignmentIndIcon className="icon"/>
            <span> Suppliers</span>
          </li>
          <p className="tittle">SERVICES</p>
          <li>
            <LocalGroceryStoreIcon className="icon"/>
            <span> Products</span>
          </li>
          <li>
            <AddShoppingCartIcon className="icon"/>
            <span> Buys</span>
          </li>
          <li>
            <SellIcon className="icon"/>
            <span> Sells</span>
          </li>
          <li>
            <DvrIcon className="icon"/>
            <span> Stock</span>
          </li>
          <p className="tittle">INFO</p>
          <li>
            <EqualizerIcon className="icon"/>
            <span> Statics</span>
          </li>
          <li>
            <InfoIcon className="icon"/>
            <span> About</span>
          </li>
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
