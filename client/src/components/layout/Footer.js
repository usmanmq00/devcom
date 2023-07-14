import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Footer = ({ styles }) => {
  return (
    <Fragment>
      <div className={styles.footer}>
        <div>© Copyright 2022 DevCom</div>
      </div>
    </Fragment>
  );
};

Footer.propTypes = {
  styles: PropTypes.object.isRequired
};

export default Footer;
