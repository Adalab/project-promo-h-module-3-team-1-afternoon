import React from 'react';
import FormInputText from './cc-components/FormInputText';
import FormImageItem from './cc-components/FormImageItem';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className='fill__form' action='' method='post'>
        <FormInputText
          title="Nombre completo"
          htmlFor='txtFullName'
          name='name'
          value={this.props.userData.name}
          handleChangeInputText={this.props.handleChangeInputText}
          type="text"
          placeholder='Ej: Sally Jill'
        />

        <FormInputText
          title="Puesto"
          htmlFor='txtJob'
          name='job'
          value={this.props.userData.job}
          handleChangeInputText={this.props.handleChangeInputText}
          type="txtJob"
          placeholder='Ej: Front-end unicorn'
        />

        <FormInputText
          title="Teléfono"
          htmlFor='txtPhoneNumber'
          name='phone'
          value={this.props.userData.phone}
          handleChangeInputText={this.props.handleChangeInputText}
          type="tel"
          placeholder='Ej: 555-55-55'
        />

        <FormInputText
          title="Linkedin"
          htmlFor='txtLinkedinUser'
          name='linkedin'
          value={this.props.userData.linkedin}
          handleChangeInputText={this.props.handleChangeInputText}
          type="text"
          placeholder='Ej: linkedin.com/in/sally.hill'
        />

        <FormInputText
          title="GitHub"
          htmlFor='txtGithubUser'
          name='github'
          value={this.props.userData.github}
          handleChangeInputText={this.props.handleChangeInputText}
          type="text"
          placeholder='Ej: @sally-hill'
        />

        <FormImageItem />
      </form>
    );
  }
}

export default Form;