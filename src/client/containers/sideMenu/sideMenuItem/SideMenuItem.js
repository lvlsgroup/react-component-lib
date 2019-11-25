import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactLink from '@rc-lib-client/components/links/reactLink/ReactLink';
import styles from './sideMenuItem.scss';

class SideMenuItem extends PureComponent {
  render() {
    const { location, route, onCloseClick, title, className } = this.props;

    let currentUrl = null;
    if (location) {
      currentUrl = location.pathname;
    }

    return (
      <div
        className={`${styles.sideMenuItem}${className ? ` ${className}` : ''}`}
      >
        <div
          className={
            currentUrl === route
              ? `${styles.focused} ${styles.itemBox}`
              : styles.itemBox
          }
        >
          <ReactLink to={route} className={styles.title} onClick={onCloseClick}>
            <div className={styles.sideMenuItem}>{title}</div>
          </ReactLink>
        </div>
      </div>
    );
  }
}

SideMenuItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  item: PropTypes.object,
  route: PropTypes.string,
  location: PropTypes.object,
  onCloseClick: PropTypes.func,
  onlyMobile: PropTypes.bool,
  subEntries: PropTypes.object,
};

export default SideMenuItem;
