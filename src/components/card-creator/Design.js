import React from 'react';

const Design = props => {

  const { updatePaletteColor } = props;

  return (
    <div className="view-hidden" id="toggle">
      <span className="create__design--text">Colores</span>
      <form className="create__design--form">
        <div className="colormix">
          <label id="color-one"></label>
          <input className="color__one" id="color-one-selected" type="radio" value="1" name="COLORES" checked={props.palette === '1'} onChange={updatePaletteColor} />
          <div className="colormix__darkblue"></div>
          <div className="colormix__blue"></div>
          <div className="colormix__acqua"></div>
        </div>
        <div className="colormix">
          <label id="color-two"></label>
          <input className="color__two" id="color-two-selected" type="radio" value="2" name="COLORES" checked={props.palette === '2'} onChange={updatePaletteColor} />
          <div className="colormix__darkred"></div>
          <div className="colormix__red"></div>
          <div className="colormix__orange"></div>
        </div>
        <div className="colormix">
          <label id="color-three"></label>
          <input className="color__three" id="color-three-selected" type="radio" value="3" name="COLORES" checked={props.palette === '3'} onChange={updatePaletteColor} />
          <div className="colormix__metalblue"></div>
          <div className="colormix__yellow"></div>
          <div className="colormix__lightgrey"></div>
        </div>
      </form>
    </div>

  )
}


export default Design;