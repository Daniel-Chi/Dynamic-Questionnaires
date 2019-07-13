import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const Login = (props) => {
  return (
    <div>
      <WelcomeHeader />
      <LoginForm historyPush={props.history.push} authenticationRoute="/signup" otherAuth="Login" />
      <Footer />
    </div>
  );
};

export default Login;