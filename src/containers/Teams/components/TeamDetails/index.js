import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as thunks from '../../thunks';
import TeamDetails from './components/TeamDetails';

class TeamDetailsContainer extends Component {
    componentDidMount() {
        const { team, actions } = this.props;
        if (team === undefined) {
            actions.getTeams();
        }
    }

    render() {
        const { team, actions } = this.props;
        return (
            <TeamDetails team={team} actions={actions} />
        );
    }
}

const mapStateToProps = ({ teams }, { match }) => {
    return {
        team: teams.models.filter(team => team.id === parseInt(match.params.teamId, 10))[0]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(thunks, dispatch)
    };
};

TeamDetailsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    team: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailsContainer);