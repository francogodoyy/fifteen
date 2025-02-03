import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InvitationPage from './InvitationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InvitationPage />
  </React.StrictMode>
);
