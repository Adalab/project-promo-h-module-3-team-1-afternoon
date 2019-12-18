import React from 'react';
import MenuCollapsible from './MenuCollapsible';
import Preview from './Preview';

const MainCardCreator = (props) => {
    return (
        <div className="MainCardCreator__wrapper">
            <MenuCollapsible />
            <Preview />
        </div>
    );
}

export default MainCardCreator;