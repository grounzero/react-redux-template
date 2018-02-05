import * as actions from '../actions';
import * as types from '../constants';

describe('Teams Action Creators', () => {
    const models = [
        { id: 1, name: 'AAA' },
        { id: 2, name: 'BBB' },
        { id: 3, name: 'CCC' },
    ];

    const updatedTeam = { id: 1, name: 'AAA' };

    let expected, actual, error = new Error('Error');

    it('creates GET_TEAMS action when getting teams', () => {
        expected = { type: types.GET_TEAMS, payload: { loading: true, error: false } };
        actual = actions.getTeams();
        expect(actual).toEqual(expected);
    });

    it('creates GET_TEAMS_SUCCESS action when teams have been retrieved successfully', () => {
        expected = { type: types.GET_TEAMS_SUCCESS, payload: { loading: false, models } };
        actual = actions.getTeamsSuccess(models);
        expect(actual).toEqual(expected);
    });

    it('creates GET_TEAMS_ERROR action if an error occurs', () => {
        expected = { type: types.GET_TEAMS_ERROR, payload: { loading: false, error: true } };
        actual = actions.getTeamsError(error);
    });

    it('creates UPDATE_TEAM action when updating a team', () => {
        expected = { type: types.UPDATE_TEAM };
        actual = actions.updateTeam();
        expect(actual).toEqual(expected);
    });

    it('creates UPDATE_TEAM_SUCCESS action when a team has been updated successfully', () => {
        expected = { type: types.UPDATE_TEAM_SUCCESS, payload: { updatedTeam } };
        actual = actions.updateTeamSuccess(updatedTeam);
        expect(actual).toEqual(expected);
    });

    it('creates UPDATE_TEAM_ERROR action if an error occurs', () => {
        expected = { type: types.UPDATE_TEAM_ERROR };
        actual = actions.updateTeamError(error);
    });
});