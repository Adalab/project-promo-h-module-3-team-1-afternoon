import React from 'react';
import TitleCollapsible from './cc-components/TitleCollapsible';
import PaletteList from './cc-components/PaletteList';

const Design = (props) => {
    return (
        <div className="Design__wrapper">
            <TitleCollapsible />
            <PaletteList />
        </div>
    );
}

export default Design;