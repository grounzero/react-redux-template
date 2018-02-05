import * as actions from './actions';
import { TeamsApi } from '../../api';

export const getTeams = (isRefresh) => (dispatch) => {
    dispatch(actions.getTeams());
    return TeamsApi.getTeams()
        .then(data => dispatch(actions.getTeamsSuccess(data, isRefresh)))
        .catch(error => dispatch(actions.getTeamsError(error)));
};

export const saveTeam = (team) => (dispatch) => {
    dispatch(actions.updateTeam());
    return TeamsApi.updateTeam(team)
        .then(data => dispatch(actions.updateTeamSuccess(data)))
        .catch(error => dispatch(actions.updateTeamError(error)));
};