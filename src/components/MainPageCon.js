import React from 'react';
import Heading from './Heading';
import ProjectBlock from './content/ProjectBlock';
import Button from './content/b-home-cta';
import Container from 'react-bootstrap/Container';
import Category from './content/Category';


const MainPageCon = () => {

  return (
      <Container>
        <Heading/>
           <h2 className="blink-name"> популярные проекты  </h2>
        <ProjectBlock/>
        <Button/>
        <Category/>
     </Container>
  );
};

export default MainPageCon;