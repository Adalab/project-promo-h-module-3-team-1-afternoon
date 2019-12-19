import React from 'react';
import Header from './card-creator/Header';
import Footer from './landing/Footer';
import logo from '../images/logo-adalab.png';
import girl from '../images/girl.png';
import UserCard from './card-creator/cc-components/UserCard';
import Preview from './card-creator/Preview';

const CardCreator = () => {
  return (
    <div className="wrapper">
      <Header linkHeader="#" />
      <div className="content">
        <UserCard
          urlImage={girl} />
        <Preview/>
      </div>
      <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
    </div>
  );
}

export default CardCreator;