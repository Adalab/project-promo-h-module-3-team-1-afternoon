import React from 'react';
import TitleCollapsible from './cc-components/TitleCollapsible';
import FormList from './cc-components/FormList';

const Form = (props) => {
    return (
        <div className="Form__wrapper">
            <TitleCollapsible />
            <FormList />
        </div>
    );
}

export default Form;