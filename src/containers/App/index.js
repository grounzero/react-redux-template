import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as thunks from './thunks';
import App from './components/App';

class AppContainer extends Component {
  render() {
    return (
      <App {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    global: state.global
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(thunks, dispatch)
  };
};

AppContainer.propTypes = {
  global: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);