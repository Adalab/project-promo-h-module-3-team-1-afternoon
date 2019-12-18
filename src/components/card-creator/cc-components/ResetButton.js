import React from 'react';

const ResetButton = (props) => {
  return (
  <button className="preview__button" id="reset">
    <i className="fa fa-trash-o fa-lg">
    </i>{props.name}
  </button>
    );
}

export default ResetButton;