import React from 'react';
import './Project.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { myProjects, projectCategories, ContentBox, SummBox } from './content/dataProjectBlock.js';

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
    return (
        <div className="summbox">
            COLLECTED: { mySumm.collected }
            PERCENT: { mySumm.collected / mySumm.required * 100}
            date: { date }
        </div>
    );
}
<SummBox id={1} />

const renderData = (id) => {
    const myDataContent = ContentBox.filter(a => {
        return id===a.id;
    });

// const renderSumm = (id) => {
//     const mySumm = myProjects = SummBox.filter(b =>{
//         return id===b.id;    
//     })
        
// }
    return myDataContent.map(obj => {
        console.warn(obj);
        return(
            <span><p>{obj.text}</p>
            <img className="pic-of" src={obj.pic} alt="" /></span> 
        )
    });
};
const Project = (props) => {
    const data = myProjects.filter(el => {
        return el.id === parseInt(props.objId, 10)
    });

    console.log("proj UI: ", props, data);
    const now = 60;
return(

        <div className="content-project-page">
        <div className="sidebar-right">
            <section id="project-status">
            
           { renderSumm(data[0].id)}
           <p className="">
           uihkk
           </p>
            

            <ProgressBar now={now} label={`${now}%`} />

            </section>
            </div>
        <section id="content-project">
            <header id="project-header">
          
                <p>{data[0].title}</p>
                <h3> {data[0].description}</h3>
            </header>
            <nav id="project-nav">
           
                <ul id="project-menu">
                    <li className="active" id="js-main-button">
                    <img src="https://img.icons8.com/doodle/48/000000/fires.png" alt=""/> <a href="#home">home</a>
                        
                    </li>
                    <li className="active" id="js-between-button">
                    
                    <img src="https://img.icons8.com/doodle/48/000000/megaphone.png" alt=""/><a href="#news">news </a>
                    </li>
                    <li className="active" id="js-between-button">
                    <img src="https://img.icons8.com/doodle/48/000000/topic-bubble.png" alt="" /> <a href="#comments"> comments </a>
                    </li>
                    <li className="active" id="js-main-button">
                    <img src="https://img.icons8.com/doodle/48/000000/wrong-puzzle-piece.png" alt="" /><a href="#supporters"> supporters </a>
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
                                allowFullScreen
                            >
                            </iframe>
                        
                        }
 
                    </div>
                    <div className="project-discription">
                    <div className="mini-box">
                    <h3>   <img src="https://img.icons8.com/color/48/000000/user-manual.png" alt="" /> about the project
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
            
    </div>
    );
}


  export default Project;
