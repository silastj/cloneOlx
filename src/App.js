import React from 'react';
import { connect } from 'react-redux';


const Page = (props) => {
  return(
    <div>Olá Funcionando</div>
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