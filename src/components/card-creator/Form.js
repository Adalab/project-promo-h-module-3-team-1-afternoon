import React from 'react';
import FormItem from './cc-components/FormItem';
import FormImageItem from './cc-components/FormImageItem';

class Form extends React.Component {
  render() {
    return (
      <form className='fill__form' action='' method='post'>
        <div className='fill__form--content'>
          <label className='fill__label' htmlFor='txtFullName'>Nombre completo</label>
          <input className='fill__input' id='txtFullName' type='text' name='txtFullName' placeholder='Ej: Sally Jill' required />
        </div>
        <form className='fill__form' action='' method='post'>
          <FormItem onChangeHandler = {this.props.onChangeHandler}>
            {this.props.children}
          </FormItem>
          <FormImageItem/>
        </form>
    );
  }
}

export default Form;