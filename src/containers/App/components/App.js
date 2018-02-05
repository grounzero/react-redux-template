import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Card, Image, Divider } from 'semantic-ui-react';

import routes from '../../../routes';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Nav from '../../../components/Nav';
import Sidebar from '../../../components/Sidebar';

import '../styles.css';
import AppIcon from '../assets/logo.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarLeftIsVisible: true,
            sidebarRightIsVisible: true
        };

        this.sidebarLeftToggleVisibility = this.sidebarLeftToggleVisibility.bind(this);
        this.sidebarRightToggleVisibility = this.sidebarRightToggleVisibility.bind(this);
        this.getSidebarVisibility = this.getSidebarVisibility.bind(this);
    }

    sidebarLeftToggleVisibility() {
        this.setState(prevState => ({
            sidebarLeftIsVisible: !prevState.sidebarLeftIsVisible
        }));
    }

    sidebarRightToggleVisibility() {
        this.setState(prevState => ({
            sidebarRightIsVisible: !prevState.sidebarRightIsVisible
        }));
    }

    getSidebarVisibility() {
        let className = this.state.sidebarLeftIsVisible ? '' : 'sidebar-left-collapsed ';
        className += this.state.sidebarRightIsVisible ? '' : 'sidebar-right-collapsed';
        return className;
    }

    render() {
        const { global } = this.props;
        const { userInfo, versionInfo } = global;

        return (
            <main id='main-layout' className={this.getSidebarVisibility()}>
                <aside id='main-layout-sidebar-left'>
                    <Card raised>
                        <Image src={AppIcon} />
                        <Card.Content>
                            <Card.Header>All-Stars Stats</Card.Header>
                        </Card.Content>
                    </Card>
                    <Divider />
                    <Nav routes={routes} />
                </aside>
                <article id='main-layout-container'>
                    <Header userInfo={userInfo} sidebarLeftToggleVisibility={this.sidebarLeftToggleVisibility} />
                    <section id='main-layout-content'>
                        <div id='main-layout-content-container'>
                            <Switch>
                                {routes.map((route, index) => 
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}
                                    />
                                )}
                                <Redirect to={'/'} />
                            </Switch>
                        </div>
                    </section>
                    <Sidebar id={'main-layout-sidebar-right'} toggleVisibility={this.sidebarRightToggleVisibility} />
                    <Footer versionInfo={versionInfo} />
                </article>
            </main>
        );
    }
}

App.propTypes = {
    global: PropTypes.shape({
        userInfo: PropTypes.object.isRequired,
        versionInfo: PropTypes.object.isRequired
    }).isRequired,
    actions: PropTypes.object.isRequired
};

export default App;
