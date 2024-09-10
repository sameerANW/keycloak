import React from 'react';
import KeycloakProvider, { useKeycloak } from './keycloakProvider';
 
const AuthButtons = () => {
  const keycloak = useKeycloak();
 
  const handleLogin = () => {
    console.log(keycloak)
    if (keycloak) {
      keycloak.login();
    }
  };
 
  const handleSignup = () => {
    if (keycloak) {
      keycloak.register();
    }
  };
 
  return (
<div>
<button onClick={handleLogin}>Sign In</button>
<button onClick={handleSignup}>Sign Up</button>
</div>
  );
};
 
const App = () => {
  return (
<KeycloakProvider>
<div className="container">
<img
          src="https://media.licdn.com/dms/image/D5616AQG9v1HWjdbknQ/profile-displaybackgroundimage-shrink_200_800/0/1684743884035?e=2147483647&v=beta&t=Zb-s7Cxb2zku8LVsPLId1IglY1rvfroAkBoIzYoU9hE"
          alt="Profile"
          className="profile-image"
        />
<h1>Welcome to Appentwise Registration Form</h1>
<AuthButtons />
</div>
</KeycloakProvider>
  );
};
 
export default App;