import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import NavItem from './components/NavItem';

const Nav = ({ routes }) => {
    return (
        <nav>
            <Menu vertical>
                {routes.map((route, index) => {
                    const { path, exact, nav } = route;
                    return nav ? <NavItem key={index} name={nav.name} path={path} exact={exact} content={nav.content} /> : null;
                })}
            </Menu>
        </nav>
    );
};

Nav.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        exact: PropTypes.bool,
        nav: PropTypes.shape({
            name: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    })).isRequired
};

export default Nav;