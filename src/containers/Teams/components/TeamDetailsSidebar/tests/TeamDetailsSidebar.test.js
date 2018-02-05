import React from 'react';
import renderer from 'react-test-renderer';

import TeamDetailsSidebar from '../components/TeamDetailsSidebar';
import initialState from '../../../../../store/initialState';

const { teams } = initialState;
const actions = {};

it('TeamDetailsSidebar renders correctly', () => {
    const tree = renderer.create(
        <TeamDetailsSidebar teams={teams.models} loading={teams.loading} actions={actions} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});