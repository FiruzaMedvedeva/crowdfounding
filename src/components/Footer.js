import React from 'react';
import './Footer.css';





const Footer =() =>{
  return(
    
    <footer className="b-footer">
         <div className="b-container">
            <div className="footer-body">
                
                <section className="footer-section">
                    <h3 className="footer-subtitle">О платформе</h3>
                    <ul className="list">
                        <li><a href="#vra">как это работает?</a></li>
                    </ul>
                </section>

                <section className="footer-section">
                    <h3 className="footer-subtitle">Связь</h3>
                    <ul className="list">
                        <li><a href="#vdf">Форум</a></li>
                        <li><a href="#vfd">Свяжись с нами</a></li>
                       
                    </ul>
                </section>

                <section className="footer-section">
                    <h3 className="footer-subtitle">Birge!</h3>
                    <ul className="list">
                        <li><a href="#vdf">Сотрудничество</a></li>
                        <li><a href="#vd">Партнеры</a></li>
                    
                    </ul>
                </section>

                <section className="footer-section">
                <img src="../img/icons/main-logo.png" alt="" />
                <img src="../img/icons/slogan.png" alt="" />
                </section>

            </div>
            <div className="b-strike">
                <h3 className="strike-body">
                Сделано с любовью
                </h3>
            </div>
            <div className="footer-icons">
                <ul className="footer-socials">
                    <li className="list-item"><img src="https://img.icons8.com/material-two-tone/24/000000/instagram-new.png" alt="" /></li>
                    <li className="list-item"><img src="https://img.icons8.com/material/24/000000/facebook.png" alt="" /></li>
                    <li className="list-item"><img src="https://img.icons8.com/material-two-tone/24/000000/youtube-play.png" alt="" /></li>
                   
                   
                </ul>
            </div>
        </div>
     
    </footer>
 
      );
}
  

  export default Footer;
