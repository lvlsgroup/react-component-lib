import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './fluidImage.scss';

function FluidImage({
  src,
  classNameContainer,
  classNameImage,
  aspectRatio,
  alt,
}) {
  const paddingBottomPercentage = `${(1 / aspectRatio) * 100}%`;

  return (
    <div
      className={classNames(styles.fluidImageContainer, classNameContainer)}
      style={{ paddingBottom: paddingBottomPercentage }}
    >
      <img
        src={src}
        className={classNames(styles.fluidImage, classNameImage)}
        alt={alt}
      />
    </div>
  );
}

FluidImage.propTypes = {
  src: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameImage: PropTypes.string,
  alt: PropTypes.string,
  aspectRatio: PropTypes.number,
};

export default FluidImage;
