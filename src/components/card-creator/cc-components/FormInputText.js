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
        return (
            <div className='fill__form--content'>
                <label className='fill__label' htmlFor={this.props.htmlFor}>{this.props.title}</label>
                <input
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.handleChangeInputText}
                    className='fill__input'
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required />
                {this.props.error ? <p className="">Tu {this.props.name} no es válido</p> : ''}
            </div>
        )
    }
}

export default FormInputText;
