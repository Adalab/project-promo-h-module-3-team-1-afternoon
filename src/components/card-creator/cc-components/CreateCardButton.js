import React from 'react';

const CreateCardButton = () => {
  return (
    // <div className="create__share">
    //   <div className="create-intro">
    //     <h2 className="title">
    //       <i className="logo fas fa-share-alt"></i>comparte</h2>
    //     <i className="arrow-button-share fas fa-chevron-down"></i>
    //   </div>
    <div id="create-button-section" className="validateInputsSection">
      <button id="create-button" className="create-button form imput submit" type='submit'><i className="logo-button far fa-address-card"></i>crear tarjeta</button>
      <small className="error"></small>
    </div>
    // </div>
  )
}

export default CreateCardButton;