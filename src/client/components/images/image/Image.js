import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Image extends PureComponent {
  render() {
    const { className, src, alt, height, width, ...rest } = this.props;
    return (
      <img
        className={className || ''}
        src={src}
        height={height}
        width={width}
        alt={alt}
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
};

export default Image;
