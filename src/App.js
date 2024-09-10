import React from 'react';
import keycloak from './keycloak';  // Import Keycloak

const App = () => {

  const handleLogin = () => {
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      if (!authenticated) {
        keycloak.login();  // Redirect to Keycloak login
      }
    });
  };

  const handleSignup = () => {
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      if (!authenticated) {
        keycloak.register();  // Redirect to Keycloak registration
      }
    });
  };

  return (
    <div className="container">
      <img 
        src="https://media.licdn.com/dms/image/D5616AQG9v1HWjdbknQ/profile-displaybackgroundimage-shrink_200_800/0/1684743884035?e=2147483647&v=beta&t=Zb-s7Cxb2zku8LVsPLId1IglY1rvfroAkBoIzYoU9hE" 
        alt="Profile" 
        className="profile-image"
      />
      <h1>Welcome to Appentwise Registration Form</h1>
      <div>
        <button onClick={handleLogin}>Sign In</button>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default App;
