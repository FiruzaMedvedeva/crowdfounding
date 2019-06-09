import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import AboutPage from './AboutPage';



class Sidebar extends React.Component {
  state = {
    menuVisible: false, 
  };

  toggleMenu = () => {
    this.setState({
      menuVisible: !this.state.menuVisible,
    });
  }
  
  render() {
    return(
      <React.Fragment>
        <button onClick={this.toggleMenu}>
         <p className="button-text"><img src="https://img.icons8.com/metro/26/000000/menu.png" alt=""/><a href="#">Меню</a></p> 
        </button>
        {
          this.state.menuVisible && (
          <div className="Wrapper">
         
            <div className="ListBox">
              <div className="CloseButton"> 
                      <button onClick={this.toggleMenu}>
                          <img src="https://img.icons8.com/ios/50/000000/delete-sign-filled.png" alt=""/>       
                    </button>
                </div>
             
                  <ul className="linksWrapper">

                    <li> 
                      <Link to="/about" className="SecondaryLink">о краудфандинге</Link>
                    </li>

                     <li> 
                      <Link to="/howitworks" className="SecondaryLink"> как это работает?</Link>
                    </li>

                    <li> 
                      <Link to="/startaproject" className="SecondaryLink"> разместить проект</Link>
                    </li>

                    <li> 
                     <Link to="/allprojects" className="SecondaryLink"> все проекты</Link>
                    </li>

                   

                  </ul>

                    
            </div>
          </div>
          )
        }
      </React.Fragment>
    );
  }
};
      export default Sidebar;