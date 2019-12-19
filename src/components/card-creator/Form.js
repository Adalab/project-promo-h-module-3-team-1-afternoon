import React from 'react';

import FormImageItem from './cc-components/FormImageItem';

class Form extends React.Component {
  render() {
    return (
      <div className="create__fill">
        <div className="fill__header-container">
          <div className="fill__header">
            <i className="far fa-keyboard"></i>
            <h2 className="fill__title">rellena</h2>
          </div>
          <i className="arrow-button-form fas fa-chevron-down"></i>
        </div>
        <form className='fill__form' action='' method='post'>
          <div className='fill__form--content'>
            <label className='fill__label' htmlFor='txtFullName'>Nombre completo</label>
            <input className='fill__input' id='txtFullName' type='text' name='txtFullName' placeholder='Ej: Sally Jill' required />
          </div>
          <div className='fill__form--content'>
            <label className='fill__label' htmlFor='txtJob'>Puesto</label>
            <input className='fill__input' id='txtJob' type='text' name='txtJob' placeholder='Ej: Front-end unicorn' required />
          </div>
          <FormImageItem />
          <div className='fill__form--container'>
            <label className='fill__label' htmlFor='txtEmail'>Email</label>
            <input className='fill__input' id='txtEmail' type='email' name='txtEmail' placeholder='Ej: sally-hill@gmail.com' required />
          </div>
          <div className='fill__form--wrapper'>
            <label className='fill__label marginError' htmlFor='txtPhoneNumber'>Teléfono</label>
            <input className='fill__input' id='txtPhoneNumber' type='tel' name='txtPhoneNumber' placeholder='Ej: 555-55-55' required />
          </div>
          <div className='fill__form--content'>
            <label className='fill__label marginError' htmlFor='txtLinkedinUser'>Linkedin</label>
            <input className='fill__input' id='txtLinkedinUser' type='url' name='txtLinkedinUser' placeholder='Ej: linkedin.com/in/sally.hill' />
          </div>
          <div className='fill__form--content'>
            <label className='fill__label' htmlFor='txtGithubUser'>GitHub</label>
            <input className='fill__input' id='txtGithubUser' type='text' value name='txtGithubUser' placeholder='Ej: @sally-hill' required />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;