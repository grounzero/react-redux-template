import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as thunks from '../thunks';
import * as actions from '../actions';
import initialState from '../../../store/initialState';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Teams Thunks', () => {
    let store, teams;
    beforeEach(() => {
        store = mockStore(initialState);
        teams = [
            { id: 1, name: 'AAA' },
            { id: 2, name: 'BBB' },
            { id: 3, name: 'CCC' }
        ];
    });

    it('creates GET_TEAMS and GET_TEAMS_SUCCESS actions when getting teams', () => {
        const expectedActions = [
            actions.getTeams(),
            actions.getTeamsSuccess(teams)
        ];
        
        axios.get = jest.fn(() => {
            return Promise.resolve({ status: 200, data: teams })
        });

        return store.dispatch(thunks.getTeams()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates UPDATE_TEAM and UPDATE_TEAM_SUCCESS actions when updateing a team', () => {
        const expectedActions = [
            actions.updateTeam(),
            actions.updateTeamSuccess(teams[0])
        ];
        
        axios.post = jest.fn(() => {
            return Promise.resolve({ status: 200, data: teams[0] })
        });

        return store.dispatch(thunks.saveTeam()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});