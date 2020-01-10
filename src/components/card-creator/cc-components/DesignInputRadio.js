import React from 'react';

const DesignInputRadio = (props) => {
    const { numberPalette, palette, updatePaletteColor } = props
    return <div className="colormix">
        <label id={`color-${numberPalette}`}></label>
        <input
            className={`color-${numberPalette}`}
            type="radio" value={numberPalette}
            name="COLORES"
            checked={palette === numberPalette}
            onClick={updatePaletteColor} />
        <div className={`colormix__${numberPalette}-1`}></div>
        <div className={`colormix__${numberPalette}-2`}></div>
        <div className={`colormix__${numberPalette}-3`}></div>
    </div>
}

export default DesignInputRadio;
