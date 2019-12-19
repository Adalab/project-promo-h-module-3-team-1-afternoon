import React from 'react';
import Header from './card-creator/Header';
//import Form from './card-creator/cc-components/FormList'
import Footer from './landing/Footer';
import logo from '../images/logo-adalab.png';
import girl from '../images/girl.png';
import Preview from './card-creator/Preview';
import Design from './card-creator/Design';
import Share from './card-creator/Share';
import Form from './card-creator/Form';

const CardCreator = () => {
  return (
    <div className="cardCreator__wrapper">
      <Header linkHeader="#" />
      <div className="content">
        <Preview
          urlImage={girl}
          name='Nombre Apellidos'
          profession='Front-End Developer'
        />
        <div className="create">
          <Design />
          <Form />
          <Share />
        </div>
      </div>
      <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
    </div >
  );
}

export default CardCreator;