import React from 'react';
import ReactDOM from 'react-dom/client';

//Bootstrap resources
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './index.css';
import App from './App';

//Context API
import { AuthContextProvider } from './contexts/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
)
