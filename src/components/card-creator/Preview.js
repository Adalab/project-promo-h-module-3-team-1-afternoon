import React from 'react';
import girl from '../../images/girl.png';

class Preview extends React.Component {
  render() {
      return (
        <div>
          <section className="preview blue">
            <button className="preview__button" id="reset"><i className="fa fa-trash-o fa-lg">Reset</i></button>
            <div className="preview__card">
              <div className="preview__content">
                <h1 className="preview__content__title" id="js-title">{this.props.name === '' ? "Nombre Apellido" : this.props.name}</h1>
                <p className="preview__content__text" id="js-job">{this.props.job === '' ? "Front-end Developer" : this.props.job}</p>
              </div>	
              {this.props.children}	
              <img className="preview__image" src={girl}/>
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
}


export default Preview;