import React from 'react';

const Footer = (props) => {
	return (
		<footer className="footer">
			<p className="footer__text">{props.textFooter}</p>
			<div className="footer__logo">
				<a href={props.linkFooter} target="_blank" rel="noopener noreferrer">
					<img className="footer__logo--photo" src={props.logoFooter} alt={props.logoName}/>
				</a>
			</div>
		</footer>
	);
}


export default Footer;
