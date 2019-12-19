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
          <Collapsibles icon="legend_icon far fa-object-ungroup" title="Diseña" arrow="fas fas fa-chevron-up legend_arrow">
            <PalettesContainer updateCheckboxColor={this.updateCheckboxColor}></PalettesContainer>
          </Collapsibles>
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