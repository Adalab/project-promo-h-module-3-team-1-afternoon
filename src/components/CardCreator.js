import React from 'react';
import Header from './card-creator/Header';
import Footer from './landing/Footer';
import logo from '../images/logo-adalab.png';
import girl from '../images/girl.png';
import Preview from './card-creator/Preview';
import MenuCollapsible from './card-creator/MenuCollapsible';

class CardCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        colorPalette: '1',
        name: '',
        job: '',
        phone: '',
        linkedin: '',
        github: ''
      }
    };

    this.handleChangeInputText = this.handleChangeInputText.bind(this);
    this.updateCheckboxColor = this.updateCheckboxColor.bind(this);
  }

  updateCheckboxColor(event) {
    const paletteSelected = event.target.value;
    this.setState({ colorPalette: `${paletteSelected}` });
  }

  handleChangeInputText(target) {
    let { userData } = this.state;
    userData[target.name] = target.value;
    this.setState({ userData });
  }

  render() {
    return (
      <div className="cardCreator__wrapper">
        <Header linkHeader="#" />
        <div className="content">
          <Preview
            urlImage={girl}
            userData={this.state.userData}
            colorPalette={this.state.colorPalette}
            updateCheckboxColor={this.updateCheckboxColor}
          />
          <MenuCollapsible
            updateCheckboxColor={this.updateCheckboxColor}
            handleChangeName={this.handleChangeName}
            handleChangeInputText={this.handleChangeInputText}
            userData={this.state.userData}
          />
        </div>
        <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
      </div >
    );
  }
}


export default CardCreator;