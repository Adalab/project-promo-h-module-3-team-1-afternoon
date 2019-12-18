import React from 'react';

import FormImageItem from './FormImageItem';

class FormList extends React.Component {
  render () {
    return(
      //Este div tiene que estar en el contenedor del Form, dentro va el collapsible y el form.
      <div class="create__fill">
        <form className='fill__form' action='' method='post'>
          <div className='fill__form--content'>
            <label className='fill__label' for='txtFullName'>Nombre completo</label>
            <input className='fill__input' id='txtFullName' type='text' name='txtFullName' placeholder='Ej: Sally Jill' required />
          </div>
          <div className='fill__form--content'>
            <label className='fill__label' for='txtJob'>Puesto</label>
            <input className='fill__input' id='txtJob' type='text' name='txtJob' placeholder='Ej: Front-end unicorn' required />
          </div>
          <FormImageItem/>
          <div className='fill__form--container'>
            <label className='fill__label' for='txtEmail'>Email</label>
            <input className='fill__input' id='txtEmail' type='email' name='txtEmail' placeholder='Ej: sally-hill@gmail.com' required />
          </div>
          <div className='fill__form--wrapper'>
            <label className='fill__label marginError' for='txtPhoneNumber'>Teléfono</label>
            <input className='fill__input' id='txtPhoneNumber' type='tel' name='txtPhoneNumber' placeholder='Ej: 555-55-55' required />
          </div>
          <div className='fill__form--content'>
            <label className='fill__label marginError' for='txtLinkedinUser'>Linkedin</label>
            <input className='fill__input' id='txtLinkedinUser' type='url' name='txtLinkedinUser' placeholder='Ej: linkedin.com/in/sally.hill'/>
          </div>
          <div className='fill__form--content'>
            <label className='fill__label' for='txtGithubUser'>GitHub</label>
            <input className='fill__input' id='txtGithubUser' type='text' value name='txtGithubUser' placeholder='Ej: @sally-hill' required />
          </div>
        </form>
      </div>
    );
  }
}

export default FormList;