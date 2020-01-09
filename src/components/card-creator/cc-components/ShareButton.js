import React from 'react';

const ShareButton = ({ cardUrl }) => {
    const twitterText = encodeURIComponent('He creado esta tarjeta con Awesome Profile Cards. ¡Échale un vistazo!');
    const twitterHashtag = encodeURIComponent('adalab,adalaber,frontEnd,awesomeCards');
    const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}&url=${cardUrl}&hashtags=${twitterHashtag}`;
    //linkedInBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${cardUrl}`;

    return (
        <div className="create-button-two form imput submit"><a className="shareInTwitter" target="_blank" rel="noopener noreferrer" href={twitterUrl}><i
            className="logo-button fab fa-twitter"></i><span>compartir </span>en twitter</a>
        </div>
    )
}

export default ShareButton;
