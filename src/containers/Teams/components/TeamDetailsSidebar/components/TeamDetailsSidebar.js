import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../../../../../components/Nav';

import '../styles.css';

const TeamDetailsSidebar = ({loading, teams}) => {
  if (loading) {
    return (
      <div className='ui active inverted dimmer'>
        <div className='ui text loader'>Loading</div>
      </div>
    );
  }
  return (
    <div id='team-details-sidebar'>
      <Nav routes={teams} />
    </div>
  );
};

TeamDetailsSidebar.propTypes = {
  loading: PropTypes.bool.isRequired,
  teams: PropTypes.array.isRequired
};

export default TeamDetailsSidebar;