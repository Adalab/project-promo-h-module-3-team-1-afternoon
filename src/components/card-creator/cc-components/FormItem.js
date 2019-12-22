import React from 'react';

class FormItem extends React.Component{
  constructor(props){
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      name: '',
      job: ''
    }
  }

  onChangeHandler = (event) =>{
    this.props.onChangeHandler(event.target.value, event.target.id)
    this.setState({
      name: event.target.value,
      job: event.target.value
    })
    this.forceUpdate()
    //console.log(this.state.name)
  }
  render(){
    return(
      <div>
        <div className='fill__form--content'>
          <label className='fill__label' htmlFor='txtFullName'>Nombre completo</label>
          <input onChange={this.onChangeHandler} className='fill__input' id='txtFullName' type='text' name='txtFullName' placeholder='Ej: Sally Jill' required />
        </div>
        <div className='fill__form--content'>
          <label className='fill__label' htmlFor='txtJob'>Puesto</label>
          <input onChange={this.onChangeHandler} className='fill__input' id='txtJob' type='text' name='txtJob' placeholder='Ej: Front-end unicorn' required />
        </div>
        <div className='fill__form--wrapper'>
            <label className='fill__label marginError' htmlFor='txtPhoneNumber'>Teléfono</label>
            <input onChange={this.onChangeHandler} className='fill__input' id='txtPhoneNumber' type='tel' name='txtPhoneNumber' placeholder='Ej: 555-55-55' required />
          </div>
          <div className='fill__form--content'>
            <label className='fill__label marginError' htmlFor='txtLinkedinUser'>Linkedin</label>
            <input onChange={this.onChangeHandler} className='fill__input' id='txtLinkedinUser' type='url' name='txtLinkedinUser' placeholder='Ej: linkedin.com/in/sally.hill' />
          </div>
          <div className='fill__form--content'>
            <label className='fill__label' htmlFor='txtGithubUser'>GitHub</label>
            <input onChange={this.onChangeHandler} className='fill__input' id='txtGithubUser' type='text' value name='txtGithubUser' placeholder='Ej: @sally-hill' required />
          </div>
      </div>
    )
  }
}

export default FormItem;