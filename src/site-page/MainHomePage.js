import React from 'react';
import '../Content.css';
import Project from '../Project.js';
import Footer from '../Footer.js';
import Header from '../Header';

const main = (props) => {
  return(
    <div className="title">
     <Header/>
  <div className="content">
 

 
    <Project
      objId={props.match.params.id}
    />
    
    </div>
    <Footer/>
 
  </div>
      );
}
  

  export default main;