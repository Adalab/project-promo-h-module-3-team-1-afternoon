import React from 'react';

class FormItem extends React.Component{
  constructor(props){
    super(props);
  
    this.handleChangeInputText =  this.handleChangeInputText.bind(this);
  }

  handleChangeInputText(event){
    const target = event.target;
    this.props.handleChangeName(target);
  }
  render(){
    return(
      <div>
        <div className='fill__form--content'>
          <label className='fill__label' htmlFor='txtFullName'>Nombre completo</label>
          <input 
          name={this.props.name}
          value={this.props.name}
          onChange={this.handleChangeInputText} 
          className='fill__input' 
          id='txtFullName' 
          type='text' 
          name='name' placeholder='Ej: Sally Jill' required />
        </div>
        <div className='fill__form--content'>
          <label className='fill__label' htmlFor='txtJob'>Puesto</label>
          <input onChange={this.handleChangeInputText} className='fill__input' id='txtJob' type='text' name='job' placeholder='Ej: Front-end unicorn' required />
        </div>
        <div className='fill__form--wrapper'>
            <label className='fill__label marginError' htmlFor='txtPhoneNumber'>Teléfono</label>
            <input onChange={this.handleChangeInputText} className='fill__input' id='txtPhoneNumber' type='tel' name='txtPhoneNumber' placeholder='Ej: 555-55-55' required />
          </div>
          <div className='fill__form--content'>
            <label className='fill__label marginError' htmlFor='txtLinkedinUser'>Linkedin</label>
            <input onChange={this.handleChangeInputText} className='fill__input' id='txtLinkedinUser' type='url' name='txtLinkedinUser' placeholder='Ej: linkedin.com/in/sally.hill' />
          </div>
          <div className='fill__form--content'>
            <label className='fill__label' htmlFor='txtGithubUser'>GitHub</label>
            <input 
            onChange={this.handleChangeInputText} className='fill__input' id='txtGithubUser' type='text' value name='txtGithubUser' placeholder='Ej: @sally-hill' required />
          </div>
      </div>
    )
  }
}

export default FormItem;