import React from 'react';
import Design from './Design';
import Form from './Form';
import Share from './Share';

const MenuCollapsible = (props) => {
    return (
        <div className="MenuCollapsible__wrapper">
            <Design />
            <Form />
            <Share />
        </div>
    );
}

export default MenuCollapsible;