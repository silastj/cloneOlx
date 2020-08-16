import React from 'react';
import { connect } from 'react-redux';

// App CSS
import './App.css';
// App CSS

//COMPONENTS
import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

//ROUTER
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
//ROUTER

const Page = (props) => {
  return(
    <BrowserRouter>

    <Template>
      <Header/>
        <Routes/>
      <Footer/>
    </Template>
     
    </BrowserRouter>
  );
}


const mapStateToProps = (state) => {
  return{
    user:state.user
  };
}


const mapDispatchToProps = (dispatch) => {
  return {

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Page);