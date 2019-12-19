import React from 'react';
import Header from './card-creator/Header';
//import FormList from './card-creator/cc-components/FormList'
import Footer from './landing/Footer';
import logo from '../images/logo-adalab.png';
import girl from '../images/girl.png';
import UserCard from './card-creator/cc-components/UserCard';
import Design from './card-creator/Design';
import Share from './card-creator/Share';

const CardCreator = () => {
  return (
    <div className="cardCreator__wrapper">
      <Header linkHeader="#" />
      <div className="mainCardCreator__wrapper content">

        <UserCard urlImage={girl} />
        <div className="collapsible__wrapper content-create">
          <Design />
          <Share />
        </div>
      </div>
      <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
    </div >
  );
}

export default CardCreator;