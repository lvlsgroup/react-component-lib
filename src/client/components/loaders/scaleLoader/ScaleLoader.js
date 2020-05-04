import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './scaleLoader.scss';

function ScaleLoader({ className, color = '#000000' }) {
  return (
    <div className={classNames(styles.scaleLoader, className)}>
      <div
        style={{ backgroundColor: color }}
        className={classNames(styles.rectangle, styles.rect1)}
      />
      <div
        style={{ backgroundColor: color }}
        className={classNames(styles.rectangle, styles.rect2)}
      />
      <div
        style={{ backgroundColor: color }}
        className={classNames(styles.rectangle, styles.rect3)}
      />
      <div
        style={{ backgroundColor: color }}
        className={classNames(styles.rectangle, styles.rect4)}
      />
      <div
        style={{ backgroundColor: color }}
        className={classNames(styles.rectangle, styles.rect5)}
      />
    </div>
  );
}

ScaleLoader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

export default ScaleLoader;
