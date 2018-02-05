import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as thunks from '../../thunks';
import TeamDetailsSidebar from './components/TeamDetailsSidebar';

const TeamDetailsSidebarContainer = ({ teams, loading, actions }) => {
    return (
        <TeamDetailsSidebar teams={teams} loading={loading} actions={actions} />
    );
}

const mapStateToProps = (state) => {
    const { loading, models } = state.teams;
    return {
        loading: loading,
        teams: models.map(team => (
            {
                path: `/teams/${team.id}`,
                exact: true,
                nav: {
                    name: team.name,
                    content: team.name
                }
            }
        ))
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(thunks, dispatch)
    };
}

TeamDetailsSidebarContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    teams: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailsSidebarContainer);