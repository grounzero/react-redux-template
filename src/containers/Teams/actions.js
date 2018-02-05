import * as types from './constants';
import { toastrError, toastrSuccess } from '../../toastr';

export const getTeams = () => { return { type: types.GET_TEAMS, payload: { loading: true, error: false } }; };
export const getTeamsSuccess = (models, isRefresh) => { 
    if (isRefresh) toastrSuccess('Refresh Teams', 'The Teams have been re-loaded.'); 
    return { 
        type: types.GET_TEAMS_SUCCESS, 
        payload: { 
            loading: false, 
            models } 
    }; 
};
export const getTeamsError = (error) => { toastrError('Get Teams', error.message); return { type: types.GET_TEAMS_ERROR, payload: { loading: false, error: true } }; };

export const updateTeam = () => { return { type: types.UPDATE_TEAM }; };
export const updateTeamSuccess = (updatedTeam) => { toastrSuccess('Save Team', 'The Team Details have been saved.'); return { type: types.UPDATE_TEAM_SUCCESS, payload: { updatedTeam } }; };
export const updateTeamError = (error) => { toastrError('Save Team', error.message); return { type: types.UPDATE_TEAM_ERROR }; };