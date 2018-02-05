import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

import UserInfo from '../UserInfo';

import './styles.css';
import UserIcon from './assets/user-icon.png';

const UserDetails = ({ userInfo }) => (
    <div id='user-details'>
        <Image shape='circular' src={UserIcon} width='20px' height='20px' />
        <UserInfo userInfo={userInfo} />
    </div>
);

UserDetails.propTypes = {
  userInfo: PropTypes.object.isRequired
};

export default UserDetails;