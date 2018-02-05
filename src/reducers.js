import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import appReducer from './containers/App/reducer';
import fixturesReducer from './containers/Fixtures/reducer';
import teamsReducer from './containers/Teams/reducer';

const rootReducer = combineReducers({
    global: appReducer,
    fixtures: fixturesReducer,
    teams: teamsReducer,
    toastr: toastrReducer
});

export default rootReducer;