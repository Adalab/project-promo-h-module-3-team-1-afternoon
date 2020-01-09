import React from 'react';
import ShareButton from './ShareButton';

const ShareMessage = ({ cardUrl }) => {
    return (
        <div id="share-card" className="active-share create__share-two">
            <h2 className="title-share"><span>la</span> tarjeta ha sido creada</h2>
            <a className="link-share" target="_blank" rel="noopener noreferrer"
                href={cardUrl}>Ver tarjeta</a>
            <ShareButton cardUrl={cardUrl} />
        </div>
    )
}

export default ShareMessage;
