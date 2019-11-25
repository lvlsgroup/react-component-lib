import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDownMenuItem from './dropDownMenuItem/DropDownMenuItem';
import styles from './dropDownMenu.scss';

class DropDownMenu extends Component {
  render() {
    const { className, items } = this.props;
    return (
      <div
        className={
          className
            ? `${styles.dropDownMenu} ${className}`
            : styles.dropDownMenu
        }
      >
        <div className={styles.dropDownMenuContainer}>
          {items.map((item, index) => {
            return (
              <DropDownMenuItem
                name={item.name}
                route={item.route}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

DropDownMenu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
};

export default DropDownMenu;
