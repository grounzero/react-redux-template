import Immutable from 'seamless-immutable';

import * as types from './constants';
import initialState from '../../store/initialState';

const teamsReducer = (state = initialState.teams, action = {}) => {
    const { type, payload } = action;

    const updateFunc = (arr, mutation) => arr.map((item) => item.id === mutation.id ? mutation : item);

    switch (type) {
        case types.GET_TEAMS:
        case types.GET_TEAMS_SUCCESS:
        case types.GET_TEAMS_ERROR:
            return Immutable.merge(state, payload);
        case types.UPDATE_TEAM_SUCCESS:
            const { updatedTeam } = payload;
            return Immutable.update(state, 'models', updateFunc, updatedTeam);
        case types.UPDATE_TEAM:
        case types.UPDATE_TEAM_ERROR:
        default: return state;
    }
};

export default teamsReducer;