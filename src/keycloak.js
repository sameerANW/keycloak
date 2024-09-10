import Keycloak from "keycloak-js";

// Initialize Keycloak using environment variables
const keycloak = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL || "http://localhost:8080/",
  realm: process.env.REACT_APP_KEYCLOAK_REALM || "appnetwise01",
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || "frontend-client",
});

const initKeycloak = (onAuthSuccess, onAuthError) => {
  keycloak
    .init({ onLoad: "check-sso", checkLoginIframe: false })
    .then((authenticated) => {
      if (authenticated) {
        onAuthSuccess(keycloak);
      } else {
        onAuthError();
      }
    })
    .catch((err) => {
      console.error("Failed to initialize Keycloak", err);
      onAuthError();
    });
};

export { keycloak, initKeycloak };
