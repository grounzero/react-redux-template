import cloneDeep from 'lodash/cloneDeep';

import teamsReducer from '../reducer';
import * as actions from '../actions';
import initialState from '../../../store/initialState';

describe('Teams Reducer', () => {
    const models = [
        { id: 1, name: 'AAA' },
        { id: 2, name: 'BBB' },
        { id: 3, name: 'CCC' }
    ];
    const error = new Error();

    let expected, actual;

    beforeEach(() => {
        initialState.teams.models = models;
        expected = cloneDeep(initialState.teams);
    });

    /*
        1. Change the expected state (which is a deep clone of the initalState) to reflect the expected computed state
        2. Compute the next state using the initialState and the reducer
        3. Compare the actual state against the expected state
    */

    it('returns the initial state', () => {
        actual = teamsReducer(undefined, {});
        expect(actual).toEqual(expected);
    });

    it('handles the getTeams action', () => {
        expected.loading = true;
        actual = teamsReducer(undefined, actions.getTeams());
        expect(actual).toEqual(expected);
    });

    it('handles the getTeamsSuccess action', () => {
        actual = teamsReducer(undefined, actions.getTeamsSuccess(models));
        expect(actual).toEqual(expected);
    });

    it('handles the getTeamsError action', () => {
        expected.error = true;
        actual = teamsReducer(undefined, actions.getTeamsError(error));
        expect(actual).toEqual(expected);
    });

    it('handles the updateTeam action', () => {
        actual = teamsReducer(undefined, actions.updateTeam());
        expect(actual).toEqual(expected);
    });

    it('handles the updateTeamSuccess action', () => {
        expected.models[1].name = 'ZZZ';
        actual = teamsReducer(undefined, actions.updateTeamSuccess(expected.models[1]));
        expect(actual).toEqual(expected);
    });

    it('handles the updateTeamError action', () => {
        actual = teamsReducer(undefined, actions.updateTeamError(error));
        expect(actual).toEqual(expected);
    });
});