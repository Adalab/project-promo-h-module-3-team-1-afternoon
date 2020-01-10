import React from 'react';
import FormInputText from './cc-components/FormInputText';
import FormImageItem from './cc-components/FormImageItem';

class Form extends React.Component {
  render() {
    const {
      userData,
      handleChangeInputText,
      updatePhoto,
      isPhotoDefault,
      error
    } = this.props;

    return (
      <form className='fill__form' action='' method='post'>
        <FormInputText
          title="Nombre completo"
          htmlFor='txtFullName'
          name='name'
          value={userData.name}
          handleChangeInputText={handleChangeInputText}
          type="text"
          placeholder='Nombre Apellido'
        />

        <FormInputText
          title="Puesto"
          htmlFor='txtJob'
          name='job'
          value={userData.job}
          handleChangeInputText={handleChangeInputText}
          type="txtJob"
          placeholder='Front-end Developer'
        />

        <FormImageItem
          photo={userData.photo}
          updatePhoto={updatePhoto}
          isPhotoDefault={isPhotoDefault}
        />

        <FormInputText
          title="Email"
          htmlFor='txtEmail'
          name='email'
          value={userData.email}
          handleChangeInputText={handleChangeInputText}
          type="txtEmail"
          placeholder='n.apellido@gmail.com'
          error={error.email}
        />


        <FormInputText
          title="Teléfono"
          htmlFor='txtPhoneNumber'
          name='phone'
          value={userData.phone}
          handleChangeInputText={handleChangeInputText}
          type="tel"
          placeholder='666 66 66 66'
          error={error.phone}

        />

        <FormInputText
          title="Linkedin"
          htmlFor='txtLinkedinUser'
          name='linkedin'
          value={userData.linkedin}
          handleChangeInputText={handleChangeInputText}
          type="text"
          placeholder='nombre.apellido'
        />

        <FormInputText
          title="GitHub"
          htmlFor='txtGithubUser'
          name='github'
          value={userData.github}
          handleChangeInputText={handleChangeInputText}
          type="text"
          placeholder='nombre.apellido'
        />

      </form>
    );
  }
}

export default Form; 