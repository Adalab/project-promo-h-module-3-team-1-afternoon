import React from 'react';
import Header from './card-creator/Header';
import Footer from './landing/Footer';
import logo from '../images/logo-adalab.png';
import ShareMessage from './card-creator/cc-components/ShareMessage';

const CardCreator = () => {
  return (
    <div className="cardCreator__wrapper">
      <Header linkHeader="#" />
      <ShareMessage />
      <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
    </div>
  );
}

export default CardCreator;