import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './syncLoader.scss';

function SyncLoader({ className, fullScreen }) {
  return (
    <div
      className={classNames(
        fullScreen ? styles.loaderFullScreen : styles.syncLoader
      )}
    >
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
