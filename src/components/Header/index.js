import React from 'react';
import PropTypes from 'prop-types';

import UserDetails from '../UserDetails';

import './styles.css';

const Header = (props) => (
  <header id='main-layout-header'>
    <i id='sidebar-left-toggle' className='content big icon' onClick={props.sidebarLeftToggleVisibility} />
    <UserDetails userInfo={props.userInfo} />
  </header>
);

Header.propTypes = {
  sidebarLeftToggleVisibility: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired
};

export default Header;