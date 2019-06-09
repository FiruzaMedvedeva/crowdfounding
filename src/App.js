import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import MainPage from './components/MainPage'
import ProjectsPageCon from './components/ProjectsPageCon';
import AboutPage from './components/AboutPage';
import HowitworksPage from './components/HowitworksPage';
import AboutCrowdfounding from './components/AboutCrowdfounding';
import AboutPaltform from './components/AboutPlatform';
import SignupForm from './components/SignupForm';
import SigninForm from './components/SigninForm';
import StartProject from './components/StartProject';
import Allprojects from './components/Allprojects';
import ForumPage from './components/ForumPage';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/mainpage' component={MainPage}/>
            <Route path='/projects/:id' component={ProjectsPageCon}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/howitworks' component={HowitworksPage}/>
            <Route exact path='/aboutcrowdfounding' component={AboutCrowdfounding}/>
            <Route exact path='/aboutplatform' component={AboutPaltform}/>
            <Route exact path='/signinform' component={SigninForm}/>
            <Route exact path='/signupform' component={SignupForm}/>
            <Route exact path='/startaproject' component={StartProject}/>
            <Route exact path='/allprojects' component={Allprojects}/>
            <Route exact path='/forumpage' component={ForumPage}/>
            


            
           </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;