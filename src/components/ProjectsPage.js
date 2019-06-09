import React from 'react';

import Header from './Header';
import MainPageCon from './MainPageCon'
import Footer from './Footer';
import ProjectsPageCon from './components/ProjectPageCon';



const ProjectsPage = () => {

  return (
    <div>
      <Header/>
        <ProjectsPageCon/>
      <Footer/>
    </div>
  );
};


export default ProjectsPage; 