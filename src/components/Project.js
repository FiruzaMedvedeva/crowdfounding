import React from 'react';
import './Project.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { myProjects, projectCategories, ContentBox, SummBox } from './content/dataProjectBlock.js';
import Creator from './Creator';
import Rewards from './Rewards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Checkout from  './Checkout'
import { Link } from 'react-router-dom';


  const renderCategories = (cats) => {
    const myCats = projectCategories.filter(c => {
        return cats.includes(c.id);
    });

    return myCats.map(cat => {
        return (
            <a href={`/categories/${cat.slug}/`} key={cat.slug}>
            <img src="https://img.icons8.com/color/48/000000/map-pin.png" alt="" />{cat.title}</a>       
        );
    });
};

  const renderSumm = (id) => {
    const mySumm = SummBox.filter( b =>( b.id === id))[0];
    console.warn("---", mySumm);
    const d = mySumm.launched;
    const date = [
        d.getFullYear(),
        ('0' + (d.getMonth() + 1)).slice(-2),
        ('0' + d.getDate()).slice(-2)
      ].join('-');
      const percent = Number(mySumm.collected)   / Number( mySumm.required ) * 100;

    return (
      <div className="summbox">
        <p className="collected">собрано: { mySumm.collected } сом </p>
        <p className="required">требуется: { mySumm.required} </p>
        <div className="progress-summ">
          <ProgressBar now={percent} label={`${percent}%`} />
        </div>
        <div className="timeleft_hover">
          <span className="timestart"> дата старта: { date } </span>
        </div> 
        <Link to="/signinform" className="contribute">сделать вклад</Link>
        <div className="support"></div>
        <Checkout />
      </div>
    );
}

  const renderData = (id) => {
    const myDataContent = ContentBox.filter(a => {
        return id===a.id;
    });

    return myDataContent.map(obj => {
        console.warn(obj);
           return(
            <span><p>{obj.text}</p>
            <img className="pic-of" src={obj.pic} alt="" /></span> 
        )
    });
};
  const Project = (props) => {
    const projId = props.match.params.id;
    const data = myProjects.filter(el => {
        return el.id === parseInt(projId, 10)
    });

    console.log("proj UI: ", props, data);
    const now = 60;
    return(

    <Row>
      <Col className="content-project-page" xs="12" md="9">
        <section id="content-project">
           <header id="project-header">
              <h3>{data[0].title}</h3>
              <h5> {data[0].description}</h5>
            </header>
              <nav id="project-nav">
                  <ul id="project-menu">
                      <li className="active" id="js-between-button">
                      <img src="https://img.icons8.com/office/30/000000/new-post.png"/>
                      </li>
                      <li className="active" id="js-between-button">
                      <img src="https://img.icons8.com/office/30/000000/comments.png"/>
                      </li>
                      <li className="active" id="js-between-button">
                      <img src="https://img.icons8.com/office/30/000000/support.png"/>
                      </li>
                  </ul>
              </nav>
           <div id="project-sharing">
            <li className="icons-social-media">
              <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#gp"><i className="fab fa-google-plus-g"></i></a>
              <a href="#tw"><i className="fab fa-twitter"></i></a>
              <a href="#wh"><i className="fab fa-whatsapp"></i></a>
             </li>
           </div>
            <div id="project-content-wrapper">
                <div id="project-media">
                    {
                      data[0].video &&                         
                      <iframe
                        title="if"
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${data[0].video}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                      </iframe>
                    }
                    </div>
                    <div className="project-discription">
                      <div className="mini-box">
                        <h3><img src="https://img.icons8.com/color/48/000000/user-manual.png" alt="" />о проекте
                               {
                                   renderCategories(data[0].category)
                               }
                         </h3>
                      </div>
                        <section className="from-editor">
                          <div className="from-editor-content">
                            {
                                renderData(data[0].id)
                            }
                          </div>
                        </section>
                </div>
          </div>
        </section>
     </Col>

    <Col className="sidebar" xs="12" md="3">
      <div className="sidebar-right">
        <section id="project-status">
          { renderSumm(data[0].id)}
        </section>
      </div>
          <Creator author={data[0].author}/>
          <Rewards project={data[0].id}/>
    </Col>

    </Row>
    
    );
}


  export default Project;
