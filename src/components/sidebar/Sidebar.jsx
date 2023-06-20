import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className='logo'>AdmiN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
              <p className='title'>MAIN</p>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                <DashboardIcon className='icon' />
                <span>
                    Dashboard
                </span>
                </li>
                </Link>
            <p className='title'>LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
               <PersonOutlineOutlinedIcon className='icon'/>
                <span>
               Users
                </span>
                </li>
                </Link>
                <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
               <StorefrontIcon className='icon'/>
                <span>
               Products
                </span>
                </li>
                </Link>
            <li>
                <Inventory2Icon className='icon'/>
                <span>
                    Orders
                </span>
                </li>
            <li>
                <DeliveryDiningIcon className='icon'/>
                <span>
                 Delivery
                </span>
            </li>
            <p className='title'>USEFUL</p>
            <li>
                <EqualizerIcon className='icon'/>
                <span>
                 Stats
                </span>
            </li>
            <li>
                <span>
                <NotificationsNoneIcon className='icon'/>
                Notifications
                </span>
            </li>
            <p className='title'>SERVICE</p>
            <li>
                <SettingsSystemDaydreamIcon className='icon'/>
                <span>
                 System Health
                </span>
            </li>
            <li>
                <PsychologyAltOutlinedIcon className='icon'/>
                <span>
              Logs
               </span>
            </li>
            <li>
                <span>
                <SettingsOutlinedIcon className='icon'/>
              Settings
               </span>
            </li>
            <p className='title'>USER</p>
            <li>
                <AccountCircleOutlinedIcon className='icon'/>
                <span>
              Profile
               </span>
            </li>
            <li>
                <LogoutOutlinedIcon className='icon'/>
                <span>
              Logout
               </span>
            </li>
        </ul>
      </div>
      <div className="bottom">
      <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div> </div>

    </div>
  )
}

export default Sidebar
