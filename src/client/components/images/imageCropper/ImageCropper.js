import React from 'react';
import PropTypes from 'prop-types';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class ImageCropper extends React.PureComponent {
  render() {
    const {
      refFunc,
      onSelectingArea,
      imageUrl,
      aspectRatio,
      guides,
      checkImageOrigin,
      viewMode,
      zoomable = true,
    } = this.props;

    return (
      <Cropper
        ref={refFunc}
        src={imageUrl}
        style={{ height: '100%', width: '100%' }}
        aspectRatio={aspectRatio}
        guides={guides}
        crop={onSelectingArea}
        viewMode={viewMode}
        checkImageOrigin={checkImageOrigin}
        zoomable={zoomable}
      />
    );
  }
}

ImageCropper.propTypes = {
  refFunc: PropTypes.func,
  onSelectingArea: PropTypes.func,
  imageUrl: PropTypes.string,
  aspectRatio: PropTypes.number,
  guides: PropTypes.bool,
  checkImageOrigin: PropTypes.bool,
  viewMode: PropTypes.oneOf([0, 1, 2, 3]),
  zoomable: PropTypes.bool,
};

export default ImageCropper;
