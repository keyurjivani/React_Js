import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    navigate('/products');
  };

  return (
    <div className="text-center">
      <h2>Login</h2>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
