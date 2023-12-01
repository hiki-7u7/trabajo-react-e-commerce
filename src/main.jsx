import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import App from './App.jsx';
import './index.css';
import { CartProvider } from './cart/context/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <>
          <App />
          <Toaster toastOptions={{
            style: {
              border: '2px solid hsl(0,0%,20%)'
            }
          }}/>
        </>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
