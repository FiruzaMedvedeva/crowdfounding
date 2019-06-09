import React from 'react';
import { User } from './content/dataProjectBlock.js';
import './Creator.css';

const Creator = (props) => {
  const user = User.filter(u => {
    if (u.id === props.author)
      return true;
    return false;
  });
  return (
    <section id="author">
    <h2>Автор проекта</h2>
  
      <div className="author-box">
        <img className="creator" src={user[0].logo} alt="#f"/>
      
            <ul>
              <li className="fullname"><img src="https://img.icons8.com/windows/27/000000/person-female.png"/>{user[0].fullname}</li>
              <li className="phone"><img src="https://img.icons8.com/windows/27/000000/phone.png"/>{user[0].phone}</li>
              <li className="email"><img src="https://img.icons8.com/windows/24/000000/secured-letter.png"/>{user[0].email}</li>
            </ul>
          
          </div>
          <h3>{user[0].about}</h3>
     </section>
  );
 
};
export default Creator;