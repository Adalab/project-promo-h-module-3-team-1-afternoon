import React from 'react';
import ShareButton from './ShareButton';

const ShareMessage = () => {
    return (
        <div id="share-card" class="active-share hidden create__share-two">
            <h2 class="title-share"><span>la</span> tarjeta ha sido creada</h2>
            <a class="link-share" target="_blank"
                href=""></a>
            <ShareButton />
        </div>
    )
}

export default ShareMessage;
