import Home from './containers/Home';
import Fixtures from './containers/Fixtures';
import TeamList from './containers/Teams/components/TeamList';
import TeamDetails from './containers/Teams/components/TeamDetails';
import TeamDetailsSidebar from './containers/Teams/components/TeamDetailsSidebar';
import About from './containers/About';

const routes = [
    {
        path: '/',
        exact: true,
        nav: {
            name: 'home',
            content: 'Home'
        },
        sidebar: null,
        main: Home
    },
    {
        path: '/fixtures',
        nav: {
            name: 'fixtures',
            content: 'Fixtures'
        },
        sidebar: null,
        main: Fixtures
    },
    {
        path: '/teams/:teamId',
        exact: true,
        sidebar: TeamDetailsSidebar,
        main: TeamDetails
    },
    {
        path: '/teams',
        nav: {
            name: 'teams',
            content: 'Teams'
        },
        sidebar: null,
        main: TeamList
    },
    {
        path: '/about',
        nav: {
            name: 'about',
            content: 'About'
        },
        sidebar: null,
        main: About
    }
];

export default routes;