import React from 'react';
import LandingContent from './LandingContent';
import Footer from './Footer';
import logo from '../../images/logo-adalab.png';

const Landing = () => {
  return (
    <React.Fragment>
      <LandingContent />
      <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
    </React.Fragment>
  );
}


export default Landing;