import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import HomePage from './pages/HomePage'
import main from './components/site-page/MainHomePage.js'


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/components/:id' component={main}/>
            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;