import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

function Login(props) {
  return (
    <div>
      <Header />
      <LoginForm 
      authenticationRoute="/signup" 
      otherAuth="Login"
      historyPush={props.history.push} />
      <Footer />
    </div>
  );
};

export default Login;