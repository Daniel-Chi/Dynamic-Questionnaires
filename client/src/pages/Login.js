import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

function Login() {
  return (
    <div>
      <Header />
      <LoginForm authenticateRoute="/login" />
      <Footer />
    </div>
  );
};

export default Login;