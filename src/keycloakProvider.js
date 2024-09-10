import React, { createContext, useContext, useState, useEffect } from 'react';
import { initKeycloak } from './keycloak';
 
const KeycloakContext = createContext();
 
export const useKeycloak = () => useContext(KeycloakContext);
 
const KeycloakProvider = ({ children }) => {
  const [keycloakInstance, setKeycloakInstance] = useState(null);
 
  useEffect(() => {
    initKeycloak(
      (kc) => setKeycloakInstance(kc),
      () => console.error('Authentication failed')
    );
  }, []);
 
  return (
<KeycloakContext.Provider value={keycloakInstance}>
      {children}
</KeycloakContext.Provider>
  );
};
 
export default KeycloakProvider;