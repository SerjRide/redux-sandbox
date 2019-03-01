import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  * as actions from '../actions'

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div class="jumbotron">
      <h2>{counter}</h2>
      <button id="dec"
        onClick={dec}
        class="btn btn-primary btn-lg">DEC
      </button>
      <button id="inc"
        onClick={inc}
        class="btn btn-primary btn-lg">INC
      </button>
      <button id="rnd"
        onClick={rnd}
        class="btn btn-primary btn-lg">RND
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps, actions)(Counter);
