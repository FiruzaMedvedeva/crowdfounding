import React from 'react';
import './Header.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



const Qu = (props) => {
  return (
    <div className="" >
      { props.text }
    </div>
  );
};

  const Header = () => {
  const state = {
    currentName: '',
  };

  return (
    <div className="header" >
      <div className="navigation">
        <div className="menu">
          <Sidebar />
        </div>
          <div className="start-a-project">
          <Link to="/startaproject"><img src="https://img.icons8.com/material-sharp/50/000000/plus-math.png" alt=""/>Разместить проект</Link>
                <Qu text={state.currentName} />
          </div>
        </div>
        <div className="logo">
        <Link to="/mainpage"><img src="https://img.icons8.com/dusk/64/000000/b.png"/></Link>
        </div>
        
        <div className = "box">
          <div className = "search">
            <a href="#hh">Поиск</a>
          </div>
         
          <div className="sign-in">
          <Link to="/signinform">Войти</Link>
          </div>
        </div>
    </div>
  );
};



export default Header;