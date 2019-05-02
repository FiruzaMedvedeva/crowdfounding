import React from 'react';
import './Header.css';
import Sidebar from './Sidebar';


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
        <a href="#hh"> <img src="https://img.icons8.com/ios/50/000000/plus-math.png" alt=""/>Создать проект</a>
          <Qu text={state.currentName} />
        </div>
        </div>
        <div className="logo">
        
        </div>
        <div className = "box">
        <div className = "search">
        <a href="#hh"> Поиск</a>
        </div>
        <div className="sign-in">
            <a href="#jj"> Войти </a>
        </div>
        </div>
    </div>
  );
};



export default Header;