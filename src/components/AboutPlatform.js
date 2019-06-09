import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './AboutPlatform.css';

const AboutPaltform = () => {

  return (
    <React.Fragment>
      <Header/>
        <div className="aboutplatform-content">
          <img src="../img/icons/main-logo.png" alt="" />
          <img src="../img/icons/slogan.png" alt="" />
          <h4> – платформа для финансирования креативных проектов</h4>
        </div>
        <p>
        Birge' - группирует проекты, выходящие в сеть с помощью этой платформы, по следующим категориям: искусство, социальные проекты, стартапы, бизнес-проекты и технологии. Проект на Birge' должен иметь начало и конец, то есть ясную и четко определенную цель.
        </p>

      <Footer/>
    </React.Fragment>
  );
};

export default AboutPaltform;
