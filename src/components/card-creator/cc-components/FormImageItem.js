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

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updatePhoto(image);
  }

  getPreview(isDefault, image) {
    return (!isDefault) ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    const { isPhotoDefault, photo } = this.props;
    return (
      <div>
        <label htmlFor='btnAddImage' className='fill__label'>Imagen de perfil</label>
        <div className='fill__file-picker-wrapper'>
          <button
            className='fill__button'
            type='button'
            onClick={this.handleFilePicker}
          > Añadir imagen </button>
          <input
            className='fill__input-file'
            id='bntFileAddImage'
            type='file'
            name='btnAddImage'
            ref={this.myFileField}
            className="get-photo__upload-field"
            onChange={this.uploadImage}
            required
          />
          <div
            className="get-photo__preview"
            style={this.getPreview(isPhotoDefault, photo)}></div>
        </div>
      </div>
    );
  }
}

FormImageItem.propTypes = {
  isPhotoDefault: PropTypes.bool.isRequired,
  photo: PropTypes.string.isRequired,
  updatePhoto: PropTypes.func.isRequired
};

export default FormImageItem;