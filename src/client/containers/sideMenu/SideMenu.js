import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SideMenuItem from './sideMenuItem/SideMenuItem';
import styles from './sideMenu.scss';

class SideMenu extends PureComponent {
  render() {
    const { className, onCloseClick, location, entries } = this.props;

    return (
      <div
        className={
          className ? `${styles.sideMenu} ${className}` : styles.sideMenu
        }
      >
        <div className={styles.exitIconBox} onClick={onCloseClick}>
          x
        </div>
        <div className={styles.menuContainer}>
          {entries.map((item, index) => {
            return (
              <SideMenuItem
                key={index}
                route={item.route}
                title={item.title}
                location={location}
                onCloseClick={onCloseClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

SideMenu.propTypes = {
  className: PropTypes.string,
  onCloseClick: PropTypes.func,
  location: PropTypes.object,
  entries: PropTypes.object,
};

export default SideMenu;
