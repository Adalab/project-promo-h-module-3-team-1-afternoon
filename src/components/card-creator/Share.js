import React from 'react';
import CreateCardButton from './cc-components/CreateCardButton';
import ShareMessage from './cc-components/ShareMessage';

const Share = (props) => {
    return (
        <div className="Share__wrapper">
            <CreateCardButton />
            <ShareMessage />
        </div>
    );
}

export default Share;