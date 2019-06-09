import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Category.css';


const Category =() =>{
  return(
    
  <Container>

  <div className="category-block">
  
    <div className="header-category">
      <h2>
       категории проектов
      </h2>
    </div>

    <div className="category-box">
      <Row>
        <Col xs="10" md="2">
          <div className="category-item">
            <a className="category-wrapper" href="#bksc">
            <img src="https://img.icons8.com/color/96/000000/magritte.png" alt=""/>
              <span className="category-title">Исскуство</span>
            </a>
          </div>
        </Col>

        <Col xs="10" md="2">
          <div className="category-item">
            <a className="category-wrapper" href="#csac">
            <img src="https://img.icons8.com/bubbles/100/000000/conference-call.png" alt=""/>
              <span className="category-title">Социальные проекты</span>
            </a>
          </div>
        </Col>

        <Col xs="10" md="2">
          <div className="category-item">
            <a className="category-wrapper" href="#csc">
            <img src="https://img.icons8.com/color/96/000000/rocket.png" alt=""/>
              <span className="category-title">Стартапы</span>
            </a>
          </div>
        </Col>

        <Col xs="10" md="2">
          <div className="category-item">
            <a className="category-wrapper" href="#cscds">
            <img src="https://img.icons8.com/doodle/96/000000/small-business.png" alt=""/>
              <span className="category-title">Бизнес-проекты</span>
            </a>
          </div>
        </Col>


        <Col xs="10" md="2">
          <div className="category-item">
            <a className="category-wrapper" href="#dfs">
            <img src="https://img.icons8.com/color/96/000000/robot-2.png" alt=""/>
              <span className="category-title">Технологии</span>
            </a>
          </div> 
        </Col>
      </Row>

      {/* <p className="open-all"></p> */}
 

      </div>
  </div>
  </Container>
   );
}
  

  export default Category;