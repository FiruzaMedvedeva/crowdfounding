import React from 'react';
import Header from '../components/Header'
import Content from '../components/Content';
import Footer from '../components/Footer';






const HomePage = (props) => {
  return (
    <div className="site">
      <Header/>
    <Content/>
      <Footer/>
    </div>
  );
};

export default HomePage;