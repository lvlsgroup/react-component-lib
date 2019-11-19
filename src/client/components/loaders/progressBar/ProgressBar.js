import React from 'react';
import PropTypes from 'prop-types';
import styles from './progressBar.scss';

const ProgressBar = ({
  className,
  progress,
  barBgColor = '#D1E4ED',
  progressLineColor = '#4895BF',
  progressLineColorWhenMax = '#5ab290',
}) => {
  return (
    <div
      className={`${styles.progressBar}${className ? ` ${className}` : ''}`}
      style={{ backgroundColor: barBgColor }}
    >
      <div
        role="progressbar"
        className={`${styles.progressLine}`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress > 100 ? 100 : progress}
        style={{
          width: `${progress}%`,
          backgroundColor:
            progress >= 100 ? progressLineColorWhenMax : progressLineColor,
        }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.number,
  barBgColor: PropTypes.string,
  progressLineColor: PropTypes.string,
  progressLineColorWhenMax: PropTypes.string,
};

export default ProgressBar;
