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

class CardCreator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Nombre Apellidos',
      profession:'Front-End Developer',
      colorPalette: '1',
  };
  this.handlePaletteChange = this.handlePaletteChange.bind(this);
  }

  handlePaletteChange(checkedPaletteValue){

    this.setState((prevState,props) => {
        let newPaletteValue = prevState.colorPalette;
        if(checkedPaletteValue === '1'){
            newPaletteValue = '1'
        }
        if(checkedPaletteValue === '2'){
            newPaletteValue = '2'
        }
        if(checkedPaletteValue === '3'){
            newPaletteValue = '3'
        }

        return {
            colorPalette: newPaletteValue
        }
    })
}

  render(){
  
  return (
    <div className="cardCreator__wrapper">
      <Header linkHeader="#" />
      <div className="content">
        <Preview
          urlImage={girl}
          name={this.state.name}
          profession={this.state.profession}
          colorPalette={this.state.colorPalette}
        />
        <div className="create">
          <Design handlePaletteChange={this.handlePaletteChange} />
          <Form />
          <Share />
        </div>
      </div>
      <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
    </div>
  );
}
}


export default CardCreator;