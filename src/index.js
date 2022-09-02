import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './Context';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Auth0Provider
   domain="dev-h6wij-zi.jp.auth0.com"
   clientId="5vRwtO90Gw96vGAZmnTXsc0bbOeEzbPa"
   redirectUri={window.location.origin}
 >
 <AppProvider>
    <App />
 </AppProvider>
 </Auth0Provider>
 
);


