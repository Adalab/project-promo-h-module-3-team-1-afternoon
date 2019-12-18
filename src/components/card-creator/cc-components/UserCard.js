import React from 'react';
import ResetButton from './ResetButton';

const UserCard = (props) => {
  return (
    <div className="content-preview">
      <section className="preview blue">
        <ResetButton name="Reset"/>
        <div className="preview__card">
          <div className="preview__content">
              <h1 className="preview__content__title" id="js-title">{props.name}</h1>
              <p className="preview__content__text" id="js-job">{props.profession}</p>
			    </div>
          <img className="preview__image" src={props.urlImage} alt="girlpreview"/>
          <div className="preview__icons">
            <span className="icon">
              <a className="icon--1 hidden-icons" href={props.urlMobile} id="js-mobile">
                <i className="fas fa-mobile-alt"></i>
              </a>
            </span>
            <span className="icon">
              <a className="icon--2 hidden-icons" href={props.urlEmail} id="js-email">
                <i className="far fa-envelope"></i>
              </a>
            </span>
            <span className="icon">
              <a className="icon--3 hidden-icons" href={props.urlLinkedin} id="js-linkedin">
              <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
            <span className="icon">
              <a className="icon--4 hidden-icons" href={props.urlGithub} id="git">
              <i className="fab fa-github-alt"></i>
              </a>
            </span>
          </div>
			  </div>
		  </section>
    </div>
  )
}
          
          
export default UserCard;