import React from 'react';
import CreateCardButton from './cc-components/CreateCardButton';
import ShareMessage from './cc-components/ShareMessage';

const Share = () => {
    return (
        <div class="create__share">
            <div class="create-intro">
                <h2 class="title"><i class="logo fas fa-share-alt"></i>comparte</h2>
                <i class="arrow-button-share fas fa-chevron-down"></i>
            </div>
            <CreateCardButton />
            <ShareMessage />
        </div>
    );
}

export default Share;