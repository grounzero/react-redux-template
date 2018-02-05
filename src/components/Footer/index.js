import React from 'react';
import PropTypes from 'prop-types';

import VersionInfo from '../VersionInfo';

export const Footer = ({versionInfo}) => (
    <footer id='main-layout-footer'>
        <VersionInfo versionInfo={versionInfo} />
    </footer>
);

Footer.propTypes = {
  versionInfo: PropTypes.object.isRequired
};

export default Footer;