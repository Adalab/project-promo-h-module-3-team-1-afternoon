import React from 'react';
import TitleCollapsible from './cc-components/TitleCollapsible';
import CreateCardButton from './cc-components/CreateCardButton';
import ShareMessage from './cc-components/ShareMessage';

const Share = (props) => {
    return (
        <div className="Share__wrapper">
            <TitleCollapsible />
            <CreateCardButton />
            <ShareMessage />
        </div>
    );
}

export default Share;