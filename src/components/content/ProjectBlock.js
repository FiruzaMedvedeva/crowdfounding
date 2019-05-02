import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectBlock.css';
import { myProjects } from './dataProjectBlock.js';





const ProjectBox = (props) => {
  console.log(props);
  return (
    
    <Link to={`/components/${props.data.id}`}>
    <div className="project-box">
      <a className="project-link" href="###">
      
        <div className="project-header">
          <div className="project-picture">
            <img src={ props.data.pic } alt='картинка проекта'></img>
          </div>
          <div className="text-box">
          <h2>
            <Link to={`/components/${props.data.id}`}>
              { props.data.title }
            </Link>
          </h2>
        
        <div className="project-content">
          <span>{ props.data.author }</span>
          <div className="category">

        <span>{ props.data.category}</span> 
        </div>
        </div>
        <div className="project-footer">
        <div className="collected"> 
        <img src="https://img.icons8.com/color/48/000000/receive-cash.png" alt=""/><span>{ props.data.collected}</span><br/> <wbr></wbr>
        </div>
        
        </div>
        </div>
        </div>
      </a>
    </div>
    </Link>
  );
};

const ProjectBlock = () => {
  return(
    <div className="ProjectBlock">
      <div className="projects">
        {
          myProjects.map(item => {
            console.log(">>>", item);
            return (
              <ProjectBox data={item} />
            );
          })
        }
        
      </div>
    </div>
  );
};

export default ProjectBlock;