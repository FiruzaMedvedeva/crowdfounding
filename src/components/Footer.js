import React from 'react';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';





const Footer =() =>{
  return(
    <Container>
      <footer className="b-footer">
        <Row>
          <Col sm>
            <section className="footer-section">
              <h3 className="footer-subtitle">О платформе</h3>
              <ul className="list">
                <li> 
                    <Link to="/howitworks" className="SecondaryLink">Как это работает?</Link>
                </li>
      
              </ul>
            </section>
          </Col>
          <Col sm>
          <section className="footer-section">
            <h3 className="footer-subtitle">Связь</h3>
            <ul className="list">
           
              <li><a href="#vfd">Свяжись с нами</a></li>
            </ul>
          </section>
          </Col>
          <Col sm>
            <section className="footer-section">
              <h3 className="footer-subtitle">Birge!</h3>
              <ul className="list">
                <li><a href="#vdf">Сотрудничество</a></li>
                <li><a href="#vd">Партнеры</a></li>
              </ul>
            </section>
          </Col>
          <Col sm>
            <section className="footer-section">
              <img src="../img/icons/main-logo.png" alt="" />
              <img src="../img/icons/slogan.png" alt="" />
            </section>
          </Col>
        </Row>
        <div className="b-strike">
          <h3 className="strike-body">
            Сделано с любовью
          </h3>
        </div>
        <div className="footer-icons">
          <ul className="footer-socials">
          
            <li className="list-item"><img src="https://img.icons8.com/color/48/000000/facebook-circled.png" alt="" /></li>
          </ul>
        </div>     
      </footer> 
    </Container>
  );
}
  

  export default Footer;
