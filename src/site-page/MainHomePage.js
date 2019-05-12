import React from 'react';
import '../components/Content.css';
import Project from '../components/Project.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header';

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