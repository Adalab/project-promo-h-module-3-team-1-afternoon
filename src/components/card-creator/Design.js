import React from 'react';
import DesignInputRadio from './cc-components/DesignInputRadio';

const Design = props => {

  const { updatePaletteColor } = props;

  return (
    <div className="view-hidden" id="toggle">
      <span className="create__design--text">Colores</span>
      <form className="create__design--form">
        <DesignInputRadio
          palette={props.palette}
          updatePaletteColor={updatePaletteColor}
          numberPalette={"1"}
        />
        <DesignInputRadio
          palette={props.palette}
          updatePaletteColor={updatePaletteColor}
          numberPalette={"2"}
        />
        <DesignInputRadio
          palette={props.palette}
          updatePaletteColor={updatePaletteColor}
          numberPalette={"3"}
        />
      </form>
    </div>

  )
}


export default Design;