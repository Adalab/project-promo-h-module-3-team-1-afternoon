import React from 'react';

const CreateCardButton = () =>{
  return (
    <div class="create__share">
      <div class="create-intro">
        <h2 class="title"><i class="logo fas fa-share-alt"></i>comparte</h2>
        <i class="arrow-button-share fas fa-chevron-down"></i>
      </div>
      <div id="create-button-section" class="validateInputsSection hidden">
        <button id="create-button" class="create-button form imput submit" type='submit'><i class="logo-button far fa-address-card"></i>crear tarjeta</button>
        <small class="error"></small>
      </div>
    </div>
  )
}

export default CreateCardButton;