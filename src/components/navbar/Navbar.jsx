import React from 'react'
import  SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import './navbar.scss'
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='navbar' >
      <div className="wrapper">
        <div className="search">
          <input type="search" name="" id="" placeholder='Search....' />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English

          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({ type: "TOGGLE" })}/>
            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon'/>
          <div className="counter">1</div>
          </div>
          <div className="item">
            <InsertCommentIcon className='icon'/>
          <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" alt="avatar" className='avatar' />
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default Navbar
