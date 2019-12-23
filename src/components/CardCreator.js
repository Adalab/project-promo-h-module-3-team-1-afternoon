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
      name: 'Nombre Apellidos',
      job: 'Front-End Developer',
      colorPalette: "1",
    
    };
    this.updateCheckboxColor = this.updateCheckboxColor.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  updateCheckboxColor(event) {
    const paletteSelected = event.target.value;
    this.setState({ colorPalette: `${paletteSelected}` });
  }
  
  handleChangeName(target) {
    this.setState({
      [target.name]: target.value});
  }

  onChangeHandler(data, id){
    console.log(data)
    console.log(id)
    this.setState((prevState, props) => {
      let newName = prevState.name;
      let newJob = prevState.job;
      if (id === 'txtFullName') {
        newName = data;
      } else if (id === 'txtJob') {
        newJob = data;
      } else {
        console.log(`onChangeHandler(id=${id}) valor no está considerado`)
      }
      return { 
        name: newName, 
        job: newJob 
      };
    });
  }

  render() {
    return (
      <div className="cardCreator__wrapper">
        <Header linkHeader="#" />
        <div className="content">
          <Preview
            urlImage={girl}
            name={this.state.name}
            job={this.state.job}
            colorPalette={this.state.colorPalette}
            updateCheckboxColor={this.updateCheckboxColor}
          />
           <MenuCollapsible 
            updateCheckboxColor={this.updateCheckboxColor}
            handleChangeName={this.handleChangeName}
            userName={this.state.name}
            job={this.state.job}/>
        </div>
        <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
      </div >
    );
  }
}


export default CardCreator;