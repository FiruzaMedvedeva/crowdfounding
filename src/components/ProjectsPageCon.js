import React from 'react';
import Container from 'react-bootstrap/Container';
import Project from  '../components/Project'
import Header from './Header';
import Footer from './Footer';


const ProjectsPageCon = (props) => {

  return (
    <React.Fragment>
      <Header/>
      <Container>
        <Project { ...props }/>
      </Container>
      <Footer/>
    </React.Fragment>
  );
};


export default ProjectsPageCon;