import React from 'react';
import Header from './Header';
import Footer from '../landing/Footer';
import logo from '../../images/logo-adalab.png';
import defaultImage from '../../images/defaultImage.png';
import Preview from './Preview';
import MenuCollapsible from './MenuCollapsible';

class CardCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhotoDefault: true,
      userData: {
        palette: '1',
        name: '',
        job: '',
        photo: defaultImage,
        email: '',
        phone: '',
        linkedin: '',
        github: ''
      }
    };
    this.baseStateUserData = this.state.userData;
    this.handleChangeInputText = this.handleChangeInputText.bind(this);
    this.updatePaletteColor = this.updatePaletteColor.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);

  }

  updatePaletteColor(event) {
    const paletteSelected = event.target.value;
    this.setState(prevState => {
      return {
        userData: {
          ...prevState.userData,
          palette: `${paletteSelected}`
        }
      };
    });
  }

  handleChangeInputText(target) {
    let { userData } = this.state;
    userData[target.name] = target.value;
    this.setState({ userData });
  }

  updatePhoto(img) {
    let { userData } = this.state;
    this.setState(prevState => {
      const newUserData = { ...userData, photo: img };
      return {
        userData: newUserData,
        isPhotoDefault: false
      }
    });
  }
  componentDidUpdate() {
    localStorage.setItem('userData', JSON.stringify(this.state.userData));
  }
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);
    console.log(this.baseStateUserData);
    if (data === null) {
      this.setState({
        isPhotoDefault: true,
        userData: this.baseStateUserData,
      })
    } else {
      this.setState({
        isPhotoDefault: false,
        userData: data,
      })
    }
  }

  render() {
    const {
      isPhotoDefault,
      userData
    } = this.state;

    return (
      <div className="cardCreator__wrapper">
        <Header linkHeader="#" />
        <div className="content">
          <Preview
            userData={userData}
            updatePaletteColor={this.updatePaletteColor}
          />
          <MenuCollapsible
            updatePaletteColor={this.updatePaletteColor}
            handleChangeInputText={this.handleChangeInputText}
            updatePhoto={this.updatePhoto}
            userData={userData}
            isPhotoDefault={isPhotoDefault}
          />
        </div>
        <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
      </div >
    );
  }
}


export default CardCreator;