import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import routes from '../../routes';

import './styles.css'

const Sidebar = (props) => {
    const { id, toggleVisibility } = props;
    return (
        <aside id={id}>
            <header className='sidebar-control-bar'>
                <i className='sidebar-toggle content big icon' onClick={toggleVisibility} />
            </header>
            <section className='sidebar-content'>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.sidebar}
                    />
                ))}
            </section>
        </aside>
    );
};

Sidebar.propTypes = {
    id: PropTypes.string.isRequired,
    toggleVisibility: PropTypes.func.isRequired,
};

export default Sidebar;