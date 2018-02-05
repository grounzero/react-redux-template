import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userInfo }) => {
    return (<span>{userInfo.domain + '/' + userInfo.username}</span>);
};

UserInfo.propTypes = {
    userInfo: PropTypes.shape({
        domain: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired
};

export default UserInfo;