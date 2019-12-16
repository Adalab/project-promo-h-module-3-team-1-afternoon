import React from 'react';
import '../style/App.scss';
import Header from './Header';
import Footer from './Footer';
import logo from '../images/logo-adalab.png';


function App() {
  return (
    <div className="App">
      <Header linkHeader="./index.html#home"/>
      <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab"/>
    </div>
  );
}

export default App;
