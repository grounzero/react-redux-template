import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as thunks from './thunks';
import Fixtures from './components/Fixtures';

import './styles.css';

class FixturesContainer extends Component {
    componentDidMount() {

    }

    render() {
        const { actions } = this.props;
        return (
            <Fixtures actions={actions} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fixtures: state.fixtures
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(thunks, dispatch)
    };
};

FixturesContainer.propTypes = {
  fixtures: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FixturesContainer);