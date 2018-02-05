import React from 'react';
import PropTypes from 'prop-types';

const VersionInfo = ({ versionInfo }) => {
    return (<span>Version {versionInfo.version} ({versionInfo.date}) | {versionInfo.company} {versionInfo.copyright}</span>);
};

VersionInfo.propTypes = {
    versionInfo: PropTypes.shape({
        company: PropTypes.string.isRequired,
        copyright: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        product: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired
    }).isRequired
};

export default VersionInfo;