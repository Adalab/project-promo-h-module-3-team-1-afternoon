import React from 'react';

const ShareButton = ({ name, url }) => {
    return (
        <>
            <div className="create-button-two form imput submit">
                <a className={`${name}-btn`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={url}>
                    <i className={` fab fa-${name}`}></i>
                    <span>Compartir</span> en <span>{name}</span>
                </a>
            </div>
        </>
    )
}

export default ShareButton;
