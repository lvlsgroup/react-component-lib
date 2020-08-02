import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './syncLoader.scss';

function SyncLoader({ className }) {
  return (
    <div className={classNames(styles.loaderFullScreen)}>
      <div
        className={`${styles.loaderContent}${className ? ` ${className}` : ''}`}
      >
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

SyncLoader.propTypes = {
  className: PropTypes.string,
  fullScreen: PropTypes.bool,
};

export default SyncLoader;
