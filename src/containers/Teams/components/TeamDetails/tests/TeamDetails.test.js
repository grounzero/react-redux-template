import React from 'react';
import renderer from 'react-test-renderer';

import TeamDetails from '../components/TeamDetails';

const team = { id: 0, name: ''};
const actions = {
    saveTeam: jest.fn()
};

it('TeamDetails renders correctly', () => {
    const tree = renderer.create(
        <TeamDetails team={team} actions={actions} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});