import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

function Login() {
  return (
    <div>
      <Header />
      <LoginForm authenticationRoute="/login" otherAuth="Signup" />
      <Footer />
    </div>
  );
};

export default Login;