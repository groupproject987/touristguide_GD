import React from 'react'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'; 
import ImgLogo from '../../assets/img/EVGA-logo.png'
import ImgMenuicon from '../../assets/img/menuicon.png'

const Header = () => {
    const dispatch = useDispatch();
    return (
      <header>
        <nav class="navbar">
          <div onClick={() => dispatch(push("/"))} class="logo">
            <img src={ImgLogo} alt="" />
            <div class="logotext">
              Ethiopian <br />
              Visitors
            </div>
          </div>
          <div onClick={() => dispatch(push("/favourites"))} class="menus">
            Favourites
            <img src={ImgMenuicon} alt="" />
          </div>
        </nav>
      </header>
    );
}

export default Header
