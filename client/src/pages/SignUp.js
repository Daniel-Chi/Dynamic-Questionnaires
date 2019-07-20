import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

function Login(props) {
  return (
    <div>
      <WelcomeHeader />
      <LoginForm 
      authenticationRoute="/signup" 
      otherAuth="Login"
      historyPush={props.history.push} />
      <Footer />
    </div>
  );
};

export default Login;