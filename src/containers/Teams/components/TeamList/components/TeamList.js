import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const TeamList = (props) => {
  const { teams } = props;
  const { error, loading, models } = teams;

  if (error) {
    return (
      <p>Sorry! There was an error loading the teams</p>
    );
  }

  if (loading) {
    return (
      <div className='ui active inverted dimmer'>
        <div className='ui text loader'>Loading</div>
      </div>
    );
  }

  return (
    <Table compact celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {models.map(team => (
          <Table.Row key={team.id}>
            <Table.Cell><NavLink to={'/teams/' + team.id} activeClassName='route--active'>{team.name}</NavLink></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

TeamList.propTypes = {
  teams: PropTypes.shape({
    models: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  }).isRequired,
  actions: PropTypes.object.isRequired
};


export default TeamList;