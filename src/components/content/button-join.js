import React from 'react';
import './b-home-cta.css';
import { Link } from 'react-router-dom';


const ButtonJoin =() =>{
  return(
    
  <div className="button-bl">
    <p className="b-home">
    <li> 
      <Link to="/about" className="SecondaryLink">что это такое?</Link>
    </li>
    </p>
    </div>
      );
}
  

  export default ButtonJoin;