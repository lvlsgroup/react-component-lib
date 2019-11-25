import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLink from '@rc-lib-client/components/links/reactLink/ReactLink';
import styles from './dropDowmMenuItem.scss';

class DropDownMenuItem extends Component {
  render() {
    const { className, name, route } = this.props;
    return (
      <ReactLink className={styles.itemText} to={route}>
        <div
          className={
            className
              ? `${styles.dropDownMenuItem} ${className}`
              : `${styles.dropDownMenuItem} `
          }
        >
          <div className={styles.colorSquare} />
          {name}
        </div>
      </ReactLink>
    );
  }
}

DropDownMenuItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  route: PropTypes.string,
  imgSrc: PropTypes.string,
  imgWidth: PropTypes.string,
  imgHeight: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default DropDownMenuItem;
