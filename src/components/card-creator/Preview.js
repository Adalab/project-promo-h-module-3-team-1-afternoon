import React from 'react';

const Preview = props => {

  let classColor = props.palette;

  if (classColor === '1') {
    classColor = 'blue'
  } else if (classColor === '2') {
    classColor = 'red'
  } else {
    classColor = 'yellow'
  }

  return (
    <div className="content-preview">
      <section className={`preview ${classColor}`}>
        <button className="preview__button" id="reset"><i className="fa fa-trash-o fa-lg"></i>Reset</button>
        <div className="preview__card">
          <div className="preview__content">
            <h1 className="preview__content__title" id="js-title">{props.userData.name === '' ? "Nombre Apellido" : props.userData.name}</h1>
            <p className="preview__content__text" id="js-job">{props.userData.job === '' ? "Front-end Developer" : props.userData.job}</p>
          </div>
          {props.children}
          <img className="preview__image" src={props.urlImage} />
          <div className="preview__icons">
            <span className="icon">
              <a className="icon--1 hidden-icons" href="" id="js-mobile"><i className="fas fa-mobile-alt"></i></a>
            </span>
            <span className="icon">
              <a className="icon--2 hidden-icons" href="" id="js-email"><i className="far fa-envelope"></i></a>
            </span>
            <span className="icon">
              <a className="icon--3 hidden-icons" href="" id="js-linkedin"><i className="fab fa-linkedin-in"></i></a>
            </span>
            <span className="icon">
              <a className="icon--4 hidden-icons" href="" id="git"><i className="fab fa-github-alt"></i></a>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Preview;