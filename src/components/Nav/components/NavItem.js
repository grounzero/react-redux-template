import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import '../styles.css';

const NavItem = ({ name, content, path, exact }) => (
    <Menu.Item as={NavLink} name={name} content={content} to={path} exact={exact} activeClassName='route--active' />
);

NavItem.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool,
};

export default NavItem;