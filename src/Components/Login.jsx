import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Widget/NavBar';
import '../Components/Widget/Footer';
import '../scss/Pages/Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

import NavBar from '../Components/Widget/NavBar';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

  const handleLoginSubmit = e => {
    e.preventDefault();
    console.log(loginData);
    alert(`Email: ${loginData.email}\nPassword: ${loginData.password}`);
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    console.log(registerData);
    alert(`Name: ${registerData.name}\nEmail: ${registerData.email}\nPassword: ${registerData.password}`);
  };

  const handleLoginInputChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterInputChange = e => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const handleFacebookButton = () => {
    alert('FaceBook');
  };
  const handleGoogleButton = () => {
    alert('Google');
  };
  const handleGithubButton = () => {
    alert('GitHub');
  };

  return (
    <>
      <NavBar />
      <div className="login">
        <div className="form-container">
          <h2 className="h2">{isRegistering ? 'Register' : 'Login'}</h2>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} className="icon" onClick={handleFacebookButton} />
            <FontAwesomeIcon icon={faGoogle} className="icon" onClick={handleGoogleButton} />
            <FontAwesomeIcon icon={faGithub} className="icon" onClick={handleGithubButton} />
          </div>
          <form onSubmit={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
            {isRegistering && (
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleRegisterInputChange}
                  value={registerData.name}
                  placeholder="Name..."
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                onChange={isRegistering ? handleRegisterInputChange : handleLoginInputChange}
                value={isRegistering ? registerData.email : loginData.email}
                placeholder="Email..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                onChange={isRegistering ? handleRegisterInputChange : handleLoginInputChange}
                value={isRegistering ? registerData.password : loginData.password}
                placeholder="Password..."
                required
              />
            </div>
            <button className="logre" type="submit">
              {isRegistering ? 'Register' : 'Login'}
            </button>
          </form>
          <button onClick={handleToggleRegister} className="btn-form">
            {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
          </button>
          <Link to="/" className='HomeLink'>Back To Home</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
