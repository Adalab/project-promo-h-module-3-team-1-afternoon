import React from 'react';
import PropTypes from 'prop-types';

class FormImageItem extends React.Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();
    this.myFileField = React.createRef();
    
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click(); 
  }

  uploadImage(e){
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return (!isDefault) ? {backgroundImage: `url(${image})`} : {};
  }

  render() {
    const {isAvatarDefault, avatar} = this.props;

    return (
      <div>
        <label htmlFor='btnAddImage' className='fill__label'>Imagen de perfil</label>
        <div className='fill__file-picker-wrapper'>
          <input className='fill__button' type='button' value='Añadir imagen' name='btnAddImage' required onClick={this.handleFilePicker}/>
          <input className='fill__input-file' id='bntFileAddImage' type='file' name='bntFileAddImage' required ref={this.myFileField} className="get-avatar__upload-field" onChange={this.uploadImage}/>
          <div className="get-avatar__preview" style={this.getPreview(isAvatarDefault, avatar)}></div>
        </div>
      </div> 
    );
  }
}

FormImageItem.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired
};

export default FormImageItem;