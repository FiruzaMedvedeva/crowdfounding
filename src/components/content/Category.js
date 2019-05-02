import React from 'react';
import './Category.css';

const Category =() =>{
  return(
    
  <div className="category-block">
    <div className="header-category">
      <h2>
       категории проектов
      </h2>
    </div>
    <div className="category-box">
      <ul className="list-box">
        <li className="category-item">
          <a className="category-wrapper" href="#bksc">
          <img src="https://img.icons8.com/color/96/000000/magritte.png" alt=""/>
            <span className="category-title">Исскуство</span>
          </a>
        </li>

        <li className="category-item">
          <a className="category-wrapper" href="#csac">
          <img src="https://img.icons8.com/bubbles/100/000000/conference-call.png" alt=""/>
            <span className="category-title">Социальные проекты</span>
          </a>
        </li>
        
        <li className="category-item">
          <a className="category-wrapper" href="#csc">
          <img src="https://img.icons8.com/color/96/000000/rocket.png" alt=""/>
            <span className="category-title">Стартапы</span>
          </a>
        </li>

        <li className="category-item">
          <a className="category-wrapper" href="#cscds">
          <img src="https://img.icons8.com/doodle/96/000000/small-business.png" alt=""/>
            <span className="category-title">Бизнес-проекты</span>
          </a>
        </li>

        <li className="category-item">
          <a className="category-wrapper" href="#fse">
          <img src="https://img.icons8.com/color/96/000000/welfare.png" alt=""/>
            <span className="category-title">Благотворительность</span>
          </a>
        </li>

        <li className="category-item">
          <a className="category-wrapper" href="#dfs">
          <img src="https://img.icons8.com/color/96/000000/robot-2.png" alt=""/>
            <span className="category-title">Технологии</span>
          </a>
        </li> 
      </ul>
      <p className="more">
      <button>открыть все</button>
      </p>
    </div>
  </div>
      );
}
  

  export default Category;