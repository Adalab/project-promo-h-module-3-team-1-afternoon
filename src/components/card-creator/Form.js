import React from 'react';
import FormItem from './cc-components/FormItem';
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
          <FormItem onChangeHandler = {this.props.onChangeHandler}>
            {this.props.children}
          </FormItem>
          <FormImageItem/>
        </form>
      </div>
    );
  }
}

export default Form;