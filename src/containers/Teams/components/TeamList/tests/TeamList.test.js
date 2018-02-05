import React from 'react';
import renderer from 'react-test-renderer';

import TeamList from '../components/TeamList';
import initialState from '../../../../../store/initialState';

const { teams } = initialState;
const actions = {};

it('TeamList renders correctly', () => {
    const tree = renderer.create(
        <TeamList teams={teams} actions={actions} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});