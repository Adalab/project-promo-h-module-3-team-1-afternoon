import React from 'react';
import logoProfile from '../../images/profile.svg';
import { Link } from 'react-router-dom';


const LandingContent = () => {

    const linkStyle = {
        color: 'white'
    };

    return (
        <main className="main">
            <div className="main__photo">
                <img className="main__photo--logo" src={logoProfile} alt="Logo Awesome Profile Cards" />
            </div>
            <section className="main__section">
                <h1 className="main__title">Crea tu tarjeta de visita</h1>
                <p className="main__text">Crea mejores contactos profesionales de forma fácil y cómoda.</p>
            </section>
            <div className="main__symbols">
                <div className="content-symbols">
                    <span className="symbols"><i className="far fa-object-ungroup"></i></span>
                    <p className="symbols__text">Diseña</p>
                </div>
                <div className="content-symbols">
                    <span className="symbols"><i className="far fa-keyboard"></i></span>
                    <p className="symbols__text">Rellena</p>
                </div>
                <div className="content-symbols">
                    <span className="symbols"><i className="fas fa-share-alt"></i></span>
                    <p className="symbols__text">Comparte</p>
                </div>
            </div>
            <Link to='/card-creator' style={linkStyle}>
                <div className="main__button">
                    <a href="./profiles.html#home-create"><span className="text-color">comenzar</span></a>
                </div>
            </Link>
        </main>

    )
}

export default LandingContent;