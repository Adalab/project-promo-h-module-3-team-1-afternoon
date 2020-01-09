import React from 'react';
import ShareMessage from './ShareMessage';

const CreateCardButton = (props) => {
  const isDataValid = () => !props.error.email && !props.error.phone && !props.error.formCompleted;

  return (
    <div id="create-button-section" className="validateInputsSection">
      <button
        id="create-button"
        className="create-button form imput submit"
        type='submit'
        onClick={props.handleCreateCardButton}
        disabled={!isDataValid()}
      >
        <i className="logo-button far fa-address-card"></i>crear tarjeta
          </button>

      {props.cardUrl ? <ShareMessage cardUrl={props.cardUrl} /> : ''}

      {props.error.email ? <small className="error">El email no es válido</small> : ''}
      {props.error.phone ? <small className="error">El teléfono no es válido</small> : ''}
      {props.error.formCompleted ? <small className="error">Te quedan campos por rellenar</small> : ''}

    </div>
  )
}

export default CreateCardButton;
