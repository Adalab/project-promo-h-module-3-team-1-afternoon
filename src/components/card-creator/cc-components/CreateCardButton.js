import React from 'react';
import ShareMessage from './ShareMessage';

const CreateCardButton = (props) => {
  const { error, handleCreateCardButton, cardUrl } = props;

  const isDataValid = () => !error.email && !error.phone && !error.formCompleted;
  return (
    <div id="create-button-section" className="validateInputsSection">
      <button
        id="create-button"
        className="create-button form imput submit"
        type='submit'
        onClick={handleCreateCardButton}
        disabled={!isDataValid()}
      >
        <i className="logo-button far fa-address-card"></i>crear tarjeta
          </button>

      {cardUrl ? <ShareMessage cardUrl={cardUrl} /> : ''}

      {error.email ? <small className="error">El email no es válido</small> : ''}
      {error.phone ? <small className="error">El teléfono no es válido</small> : ''}
      {error.formCompleted ? <small className="error">Te quedan campos por rellenar</small> : ''}

    </div>
  )
}

export default CreateCardButton;
