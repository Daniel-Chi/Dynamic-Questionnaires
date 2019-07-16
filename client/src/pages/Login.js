import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const Login = (props) => {
  return (
    <div>
      <Header />
      <LoginForm historyPush={props.history.push} authenticationRoute="/login" otherAuth="Signup" />
      <Footer />
    </div>
  );
};

export default Login;