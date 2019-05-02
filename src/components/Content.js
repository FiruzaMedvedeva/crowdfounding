import React from 'react';
import ProjectBlock from './content/ProjectBlock.js';
import './Content.css';
import Category from './content/Category';
import Button from './content/b-home-cta';
import ButtonJoin from './content/button-join';


const Content =() =>{
  return(
    
  <div className="content">
  
    <div className="board">
      <img src="./img/icons/main-logo.png" alt=""/>
      <img src="./img/icons/text.png" alt=""/>
      <ButtonJoin/>
    </div> 
    <h2 className="blink-name">популярные проекты</h2>
    <ProjectBlock/>
    <Button/>
    <Category/>
    
  </div>
      );
}
  

  export default Content;
