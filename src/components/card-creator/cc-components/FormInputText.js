import React from 'react';

class FormInputText extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeInputText = this.handleChangeInputText.bind(this);
    }

    handleChangeInputText(event) {
        this.props.handleChangeInputText(event.target);
    }

    render() {
        const {
            name,
            value,
            type,
            placeholder,
            error,
            htmlFor,
            title
        } = this.props

        return (
            <div className='fill__form--content'>
                <label className='fill__label' htmlFor={htmlFor}>{title}</label>
                <input
                    name={name}
                    value={value}
                    onChange={this.handleChangeInputText}
                    className='fill__input'
                    type={type}
                    placeholder={placeholder}
                    required />
                {error ? <small className="error">
                    {name !== 'phone'
                        ? '* Tu email no es válido'
                        : '* Tu móvil no es válido'
                    }
                </small> : ''}
            </div>
        )
    }
}

export default FormInputText;
