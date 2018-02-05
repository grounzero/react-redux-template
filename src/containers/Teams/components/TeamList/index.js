import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Header, Segment } from 'semantic-ui-react';

import * as thunks from '../../thunks';
import TeamList from './components/TeamList';

import './styles.scss';

class TeamListContainer extends Component {
    componentDidMount() {
        const { teams, actions } = this.props;

        if (teams.models.length === 0) {
            actions.getTeams();
        }
    }

    render() {
        const { teams, actions } = this.props;

        const refresh = () => actions.getTeams(true);
        return (
            <div>
                <Header as='h2' attached='top'>
                    Teams
                    <Button primary onClick={refresh} floated='right'>Refresh</Button>
                </Header>
                <Segment attached>
                    <TeamList teams={teams} actions={actions} />
                </Segment>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(thunks, dispatch)
    };
};

TeamListContainer.propTypes = {
    teams: PropTypes.shape({
        models: PropTypes.array.isRequired
    }).isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamListContainer);