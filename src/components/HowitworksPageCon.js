import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './HowitworksPageCon.css';

const HowitworksPageCon = () => {

  return (
    <React.Fragment>
      <Container>
        <div className="howitworks-content">
        <h2>Что такое Birge'?</h2>
        <img classname="howimg" src="./img/pic/content/1.jpg" alt=""/>

        <p>
           У вас есть отличный проект, но у вас нет денег для его реализации, тогда мы вам поможем! </p>
        <p>
          Birge - это краудфандинговая платформа которая поможет вам воплотить свою идею в реальность.
        </p>
        <p>
          Birge - подразумевает получение подарков, бонусов и вознаграждений ждя тех, кто согласиться финансировать вашу идею.
        </p>
        <img classname="howimg" src="./img/pic/content/7.jpg" alt=""/> <br/>
        <p>
          При размещении на площадке Birge - своего проекта вы должны установить конечный промежуток времени. Если вам не удалось собрать всю сумму для воплощении своей идеи, то вы не получаете ничего, а все деньги обратно возвращаются к инвесторам.
        </p>
        </div>  
      </Container>
    </React.Fragment>
  );
};

export default HowitworksPageCon;