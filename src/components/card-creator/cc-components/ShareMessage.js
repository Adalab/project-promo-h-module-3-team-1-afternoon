import React from 'react';
import ShareButton from './ShareButton';

const ShareMessage = ({ cardUrl }) => {
    const twitterText = encodeURIComponent('He creado esta tarjeta con Awesome Profile Cards. ¡Échale un vistazo!');
    const twitterHashtag = encodeURIComponent('adalab,adalaber,frontEnd,awesomeCards');
    const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}&url=${cardUrl}&hashtags=${twitterHashtag}`;
    //const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${cardUrl}`;

    return (
        <div id="share-card" className="active-share create__share-two">
            <h2 className="title-share"><span>la</span> tarjeta ha sido creada</h2>
            <a className="link-share" target="_blank" rel="noopener noreferrer"
                href={cardUrl}>Ver tarjeta</a>
            <ShareButton
                name={'twitter'}
                url={twitterUrl} />
            {/* <ShareButton name={'linkedin'}
                url={linkedinUrl} /> */}

        </div>
    )
}

export default ShareMessage;
