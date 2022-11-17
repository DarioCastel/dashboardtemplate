import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import { SettingsTwoTone } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search' >
        <input type="text" placeholder='search'/>
        <SearchIcon className='iconSearch'/>
        </div>

        <div className='items'>
          <div className="item">
            <LanguageIcon/>
            Inglish
          </div>
          <div className="item">
            <Brightness4Icon/>
          </div>
          <div className="item">
            <AspectRatioIcon/>
          </div>
          <div className="item">
            <NotificationAddIcon/>
            <div className='count'>1</div>
          </div>
          <div className="item">
            <MessageIcon/>
            <div className='count'>1</div>
          </div>
          <div className="item">
            <SettingsIcon/>
          </div>
          <div className="item">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/1851556002738697955/8127266EAE6A8A3AE7CC552E5ECBB264D196B2CE/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
             alt="BARAKA" 
             className='avatar' />
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Navbar