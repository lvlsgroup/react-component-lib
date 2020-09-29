import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Image extends PureComponent {
  render() {
    const {
      className,
      src,
      alt,
      height,
      width,
      srcSet,
      sizes,
      ...rest
    } = this.props;
    return (
      <img
        className={classNames(className)}
        src={src}
        height={height}
        width={width}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        {...rest}
      />
    );
  }
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
};

export default Image;
