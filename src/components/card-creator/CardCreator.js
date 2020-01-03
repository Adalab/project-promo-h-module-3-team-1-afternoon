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
      },
      error: {
        email: false,
        phone: false
      }
    };
    this.baseStateUserData = this.state.userData;
    this.handleChangeInputText = this.handleChangeInputText.bind(this);
    this.updatePaletteColor = this.updatePaletteColor.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.resetUserData = this.resetUserData.bind(this);
    //this. validateInputText = this. validateInputText.bind(this);

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


    if (target.name === 'name' || target.name === 'job' || target.name === 'linkedin' || target.name === 'github') {
      this.setState({ userData });
    } else if (target.name === 'email' && target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState(prevState => {
        return {
          userData,
          error: {
            ...prevState.error,
            email: false
          }
        };
      });
    } else if (target.name === 'email') {
      this.setState(prevState => {
        return {
          error: {
            ...prevState.error,
            email: true
          }
        };
      });

    } else if (target.name === 'phone' && target.value.match(/^\d{9}$/)) {
      this.setState(prevState => {
        return {
          userData,
          error: {
            ...prevState.error,
            phone: false
          }
        };
      });
    } else if (target.name === 'phone') {
      this.setState(prevState => {
        return {
          error: {
            ...prevState.error,
            phone: true
          }
        };
      });
    }

    // if (target.name === 'phone' || target.value !== '') {
    //   this.setState({ userData });
    // } else {
    //   alert('te quedan campos por rellenar');
    // }


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
    })
  }

  componentDidUpdate() {
    localStorage.setItem('userData', JSON.stringify(this.state.userData));
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('userData'));
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
      userData,
      error
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
            updatePhoto={this.updatePhoto}
            userData={userData}
            isPhotoDefault={isPhotoDefault}
            error={error}
          />
        </div>
        <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
      </div >
    );
  }
}


export default CardCreator;