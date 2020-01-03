import React from 'react';
import LandingContent from './LandingContent';
import Footer from './Footer';
import logo from '../../images/logo-adalab.png';

const Landing = () => {
  return (
    <div className="landing__wrapper">
      <LandingContent />
      <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
    </div>
  );
}


export default Landing;