import React from 'react';
import Header from './Header';
import Footer from '../landing/Footer';
import logo from '../../images/logo-adalab.png';
import defaultImage from '../../images/defaultImage.png';
import Preview from './Preview';
import MenuCollapsible from './MenuCollapsible';
import sendUserData from '../services/card-service';

class CardCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhotoDefault: false,
      userData: {
        palette: '1',
        name: '',
        job: '',
        photo: defaultImage,
        email: '',
        phone: '',
        linkedin: '',
        github: ''
      },
      error: {
        email: false,
        phone: false,
        formCompleted: false,
      },
      cardUrl: '',
    };
    this.baseStateUserData = this.state.userData;
    this.handleChangeInputText = this.handleChangeInputText.bind(this);
    this.updatePaletteColor = this.updatePaletteColor.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.resetUserData = this.resetUserData.bind(this);
    this.handleCreateCardButton = this.handleCreateCardButton.bind(this);
    this.updateFormCompleted = this.updateFormCompleted.bind(this);

  }

  handleCreateCardButton() {
    sendUserData(this.state.userData)
      .then(data => {
        this.setState({ cardUrl: data });
      });
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

    if (target.name === 'email') {
      const emailError = !target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && target.value !== '';
      this.setState(prevState => {
        return {
          error: {
            ...prevState.error,
            email: emailError
          }
        };
      });
    } else if (target.name === 'phone') {
      const phoneError = !target.value.match(/^\d{9}$/) && target.value !== '';
      console.log(phoneError)
      this.setState(prevState => {
        return {
          error: {
            ...prevState.error,
            phone: phoneError
          }
        };
      });
    }
    this.updateFormCompleted();
  }

  formIsNotCompleted() {
    const {
      name,
      job,
      photo,
      email,
      linkedin,
      github
    } = this.state.userData;
    return name === '' || job === '' || photo === defaultImage || email === '' || linkedin === '' || github === '';
  }

  updateFormCompleted() {
    // si todos los campos del estado userData salvo el teléfono están rellenos, actualizo el estado de formCompleted a true

    this.setState(prevState => {
      return {
        error: {
          ...prevState.error,
          formCompleted: this.formIsNotCompleted()
        }
      };
    });

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

  resetUserData() {
    this.setState({
      isPhotoDefault: false,
      userData: {
        palette: '1',
        name: '',
        job: '',
        photo: defaultImage,
        email: '',
        phone: '',
        linkedin: '',
        github: ''
      },
      error: {
        email: false,
        phone: false,
        formCompleted: false,
      },
      cardUrl: '',
    });
  }

  componentDidUpdate() {
    localStorage.setItem('appState', JSON.stringify(this.state));
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('appState'));
    if (data !== null) this.setState(data);
  }

  render() {
    const {
      isPhotoDefault,
      userData,
      error,
      cardUrl
    } = this.state;

    return (
      <div className="cardCreator__wrapper">
        <Header linkHeader="#" />
        <div className="content">
          <Preview
            userData={userData}
            updatePaletteColor={this.updatePaletteColor}
            resetUserData={this.resetUserData}
          />
          <MenuCollapsible
            updatePaletteColor={this.updatePaletteColor}
            handleChangeInputText={this.handleChangeInputText}
            handleCreateCardButton={this.handleCreateCardButton}
            updatePhoto={this.updatePhoto}
            userData={userData}
            isPhotoDefault={isPhotoDefault}
            error={error}
            cardUrl={cardUrl}
          />
        </div>
        <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
      </div >
    );
  }
}


export default CardCreator;