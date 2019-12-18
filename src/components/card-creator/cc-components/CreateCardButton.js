import React from 'react';

const CreateCardButton = () => {
    return (
        <div id="create-button-section" class="validateInputsSection hidden">
            <button id="create-button" class="create-button form imput submit" type='submit'><i class="logo-button far fa-address-card"></i>crear tarjeta</button>
            <small class="error"></small>
        </div>
    );
}

export default CreateCardButton;