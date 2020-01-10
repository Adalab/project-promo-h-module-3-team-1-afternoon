import React from 'react';

const DesignInputRadio = (props) => {
    return <div className="colormix">
        <label id={`color-${props.numberPalette}`}></label>
        <input className={`color-${props.numberPalette}`} type="radio" value={props.numberPalette} name="COLORES" checked={props.palette === props.numberPalette} onClick={props.updatePaletteColor} />
        <div className={`colormix__${props.numberPalette}-1`}></div>
        <div className={`colormix__${props.numberPalette}-2`}></div>
        <div className={`colormix__${props.numberPalette}-3`}></div>
    </div>
}

export default DesignInputRadio;
