import React from 'react';


const FormImageItem = () => {
  return (
    <div>
      <label for='btnAddImage' className='fill__label'>Imagen de perfil</label>
      <div className='fill__file-picker-wrapper'>
        <input className='fill__button' type='button' value='Añadir imagen' name='btnAddImage' required />
        <input className='fill__input-file' id='bntFileAddImage' type='file' name='bntFileAddImage' required/>
        <div className='fill__image-preview'></div>
      </div>
    </div> 
  );
}


export default FormImageItem;