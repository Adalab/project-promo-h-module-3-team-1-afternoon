import React from 'react';
import Header from './card-creator/Header';
import Footer from './landing/Footer';
import logo from '../images/logo-adalab.png';
import girl from '../images/girl.png';
import UserCard from './card-creator/cc-components/UserCard';

const CardCreator = () => {
  return (
    <div className="cardCreator__wrapper">
      <Header linkHeader="#"/>

      <UserCard 
        urlImage={girl}>
      </UserCard>
      <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
    </div>
  );
}

export default CardCreator;