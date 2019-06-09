import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './SigninForm.css';
import ButtonReg from './content/b-reg';
import Header from './Header';
import Footer from './Footer';
import './SignupForm.css';

class SignupForm extends React.Component {
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
    <div className="signup-block">
      <h2>Регистрация на сайте </h2>
      
      <form>
        <div className="name-form">
          <label>
             имя: <br/>
            <input type="text" name="name" />
          </label>
        </div>

        <div className="email-form">
          <label>
             e-mail: <br/>
            <input type="text" name="name" /> 
          </label>
        </div>

        <div className="password-form">
          <label>
             пароль: <br/>
            <input type="text" name="name" />
          </label>
        </div>
      
        <div className="button-form">
          <input type="submit" value="зарегистрироваться" />
        </div>
      </form>
      
      
      </div>
      <Footer/>   
  
      </React.Fragment>
   
  );
  }
}

export default SignupForm;