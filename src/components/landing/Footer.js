import React from 'react';

const Footer = (props) => {
  const { textFooter, linkFooter, logoFooter, logoName } = props;
  return (
    <footer className="footer">
      <p className="footer__text">{textFooter}</p>
      <div className="footer__logo">
        <a href={linkFooter} target="_blank" rel="noopener noreferrer">
          <img className="footer__logo--photo" src={logoFooter} alt={logoName} />
        </a>
      </div>
    </footer>
  );
}


export default Footer;
