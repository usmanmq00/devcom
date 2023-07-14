import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getServiceById } from '../../../actions/freelance/service';
import ServiceStatsNavigationTabs from './ServiceStatsNavigationTabs';
import styles from '../../../css/freelance/service-stats/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';
import { toggleSideNav } from '../../../actions/auth';
import windowSize from 'react-window-size';
import Spinner from '../../layout/Spinner';

const ServiceStats = ({
  service: { service, loading },
  getServiceById,
  match,
  toggleSideNav,
  windowWidth,
  auth: { displaySideNav },
}) => {
  const [getServiceByIdCalled, setGetServiceByIdCalled] = useState(false);

  useEffect(() => {
    if (!getServiceByIdCalled) {
      getServiceById(match.params.id);
      setGetServiceByIdCalled(true);
    }

    toggleSideNav(windowWidth >= 576);
    // eslint-disable-next-line
  }, [service, windowWidth]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div
          className={`${styles.content} ${
            !displaySideNav ? styles.side_nav_hidden : ''
          }`}
        >
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Service Statistics
          </div>
          <div className={styles.sub_heading}>
            Below are the statistics related to the current service
          </div>
          <ServiceStatsNavigationTabs service={service} styles={styles} />
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

ServiceStats.propTypes = {
  service: PropTypes.object.isRequired,
  getServiceById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  toggleSideNav: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  service: state.service,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getServiceById,
  toggleSideNav,
})(windowSize(ServiceStats));
