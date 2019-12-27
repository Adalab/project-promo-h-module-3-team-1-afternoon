import React from 'react';
import FormItem from './cc-components/FormItem';
import FormImageItem from './cc-components/FormImageItem';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <form className='fill__form' action='' method='post'>
          <FormItem 
          handleChangeName={this.props.handleChangeName}
          onChangeHandler = {this.props.onChangeHandler}
          name={this.props.name}
          job={this.props.job}>
            {this.props.children}
          </FormItem>
          <FormImageItem
          updateAvatar={this.props.updateAvatar}
          isAvatarDefault={this.props.isAvatarDefault}
          avatar={this.props.avatar}
          />
        </form>
    );
  }
}

export default Form; 