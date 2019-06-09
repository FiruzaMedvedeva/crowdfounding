import React from 'react';

import Header from './Header';
import AboutPageCon from './AboutPageCon';
import Footer from './Footer';
import './StartProject.css'



const StartProject = () => {

  return (
    <React.Fragment>
    <Header/>

    <div classname="start-content">
    
        <div className="start-box">

          <div className="describe-box">
            <label className="describe-label">
              Опишите свой проект: 
              <input type="text" name="describe" />
            </label>
            </div>

          <div className="for-box">
            <label className= "title">Проект создан:</label>
              <div className="checkbox">
                <div className="checked">
                 <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">на индивидуальной основе </label>
                </div>
                <div className="checked">
                  <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">для организации</label>
                  </div>
                <div className="checked">
                  <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">для бизнеса</label>
                </div>
              </div>
            </div>


            <div className="raise-box">
            <label className="title">Каков минимум денег вам необходимо собрать на платформе Birge'?</label>
            <div className="checkbox">
              <div className="checked">
                  <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">меньше 10 000 </label>
                </div>
                <div className="checked">
                  <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">между 10 000 и 100 000  </label>
                </div>
                <div className="checked">
                  <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">больше 100 000 </label>
                </div>
                <div className="checked">
                  <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">я не знаю </label>
                </div>
            </div>
            </div>

            <div className="links-box">
              <label className="title"> 
                Добавьте ссылку на вашу страницу в социальных сетях:
                </label>

                <input type="text" name="links" />
                <div className="asd">
                <button className="add">добавить</button> <br/>
               </div> 
            </div>
            
            <div className="raise-box">
            <label className="title">
              Что вы предложите спонсорам в качестве награды?</label>
               <div className="checkbox">
                 <div className="checked">
                  <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">материальную награду </label>
                </div>
                <div className="checked">
                  <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">символические награды</label>
                </div>
                <div className="checked">
                  <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">без наград</label>
                </div>
                <div className="checked">
                  <input type="checkbox" id="scales" name="scales"></input>
                  <label for="scales">еще не решил</label>
                </div>
            </div>
            </div>

            <div className="links-box">
              <label className="title">
                Как с вами связаться, оставьте свой номер телефона: 
                <input type="text" name="name" />
                 <button className="add">продолжить</button>
              </label>
            </div>
            <button className="continue">продолжить</button>

        </div>

    </div>
<Footer/>
</React.Fragment>
  );
};


export default StartProject; 