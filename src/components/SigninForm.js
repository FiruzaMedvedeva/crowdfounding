import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './SigninForm.css';
import ButtonLogin from './content/b-login';
import Header from './Header';
import Footer from './Footer';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
  return (
    <React.Fragment>
    <Header/>
    <div className="signin-block">
      <h3 className="signin-title"> Войти или
       <Link to="SignupForm"> Зарегистрироваться </Link>
      </h3>

      <form>
        <div className="name-form">
          <label>
            имя пользователя или e-mail адресс:<br/>
            <input type="text" name="name" />
          </label>
        </div>

        <div className="email-form">
          <label>
          введите пароль для сайта:  <br/>
            <input type="text" name="name" /> 
          </label>
        </div>
        
     
        <div className="chekbox">
          <input type="checkbox" id="scales" name="scales"></input>
          <label for="scales">запомнить </label>
        </div>
      
        <div className="button-form">
          <input type="submit" value="войти" />
        </div>
      </form>
      
      
      </div>
      <Footer/>   
  
      </React.Fragment>
   
  );
  }
}

export default SigninForm;



