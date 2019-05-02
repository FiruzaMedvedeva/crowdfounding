import React from 'react';
import './Sidebar.css';
// import './CloseButton.js';
// import CloseButton from './CloseButton.js';

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
         <p className="button-text"><img src="https://img.icons8.com/metro/26/000000/menu.png" alt=""/><a href="#hjiu">Меню</a></p> 
        </button>
        {
          this.state.menuVisible && (
            <aside className="Wrapper">
              <div className="ListBox">
                <div className="CloseButton"> 
                <button onClick={this.toggleMenu}>
                <img src="https://img.icons8.com/ios/50/000000/delete-sign-filled.png" alt=""/>       
                   </button>
                </div>
                <ul className="linksWrapper">
                  <li className="SearchBox" >
                    <form className="SearchWrapper" method= "GET" action="">
                      <input className="SearchInput" name="Search" placeholder="search"></input>
                    </form>
                  </li>
                  <li> 
                    <a className="SecondaryLink" href="#dfs">все проекты</a>
                  </li>
                  <li> 
                    <a className="SecondaryLink"href="#sfd">как это работает</a>
                  </li>
                  <li> 
                    <a className="SecondaryLink"href="#fs">начать проект</a>
                  </li>
                  <li> 
                    <a className="SecondaryLink"href="#sfd">о краудфандинге</a>
                  </li>
                  <li> 
                    <a className="SecondaryLink"href="#sfd">форум</a>
                  </li>
                </ul>
                <div className="LocalizationBox">
                  <a className="language" href="#asc"> english</a>
                  <a className="language" href="#csa"> русский</a>
                </div>
              </div>
            </aside>
          )
        }
      </React.Fragment>
    );
  }
};
      export default Sidebar;