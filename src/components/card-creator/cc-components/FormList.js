import React from 'react';
import FormTextItem from './cc-components/FormTextItem';
import FormImageItem from './cc-components/FormImageItem';

const FormList = (props) => {
    return (
        <div className="FormList__wrapper">
            <FormTextItem />
            <FormTextItem />
            <FormImageItem />
            <FormTextItem />
            <FormTextItem />
            <FormTextItem />
            <FormTextItem />
        </div>
    );
}

export default FormList;