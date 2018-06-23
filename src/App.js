import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

class App extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.ctr}</h1>
       <button onClick={this.props.increment}>Increment</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ctr: state.counter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => {
      dispatch(actions.add())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
