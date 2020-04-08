import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'cropperjs/dist/cropper.css';
import DropzoneWrapper from '@rc-lib-client/components/dropzones/dropzoneWrapper/DropzoneWrapper';
import Image from '@rc-lib-client/components/images/image/Image';
import ImageCropper from '@rc-lib-client/components/images/imageCropper/ImageCropper';
import ModalWrapper from '@rc-lib-client/components/modals/modalWrapper/ModalWrapper';
import styles from './dropzoneBox.scss';

class DropzoneBox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      droppedFile: undefined,
    };
  }

  onFileDrop = (file) => {
    const { onCroppedImgCanvas } = this.props;

    if (onCroppedImgCanvas) {
      this.setState(() => {
        return {
          droppedFile: file[0],
        };
      });
    } else {
      this.props.onFileDrop(file[0]);
    }
  };

  onCropImage = () => {
    const imgCanvas = this.cropper.getCroppedCanvas();

    if (typeof imgCanvas !== 'undefined') {
      this.toggleImageCropper();
      this.props.onCroppedImgCanvas(imgCanvas);
    }
  };

  toggleImageCropper = () => {
    this.setState(({ droppedFile }) => {
      return {
        droppedFile: !droppedFile,
      };
    });
  };

  getImageSrc = () => {
    const { imgSrc } = this.props;
    if (!imgSrc) {
      return '';
    } else if (imgSrc.toDataURL) {
      // src is HTMLCanvasElement
      return imgSrc.toDataURL();
    } else if (typeof imgSrc === 'string') {
      return imgSrc;
    } else {
      // A File, Blob or MediaSource
      return URL.createObjectURL(imgSrc);
    }
  };

  render() {
    const { className, imgClassName, imgCropperOptions, imgSrc } = this.props;
    const { droppedFile } = this.state;

    return (
      <div className={classNames(styles.dropzoneBox, className)}>
        {droppedFile && (
          <ModalCropContainer
            refFunc={(cropper) => {
              this.cropper = cropper;
            }}
            imgCropperOptions={imgCropperOptions}
            droppedFile={droppedFile}
            toggleImageCropper={this.toggleImageCropper}
            onCropImage={this.onCropImage}
          />
        )}
        <DropzoneWrapper
          centralizeChildren={true}
          expandWithHeight={true}
          onFileDrop={this.onFileDrop}
          multiple={false}
        >
          {imgSrc && (
            <MemoizedImage className={imgClassName} src={this.getImageSrc()} />
          )}
        </DropzoneWrapper>
      </div>
    );
  }
}

DropzoneBox.propTypes = {
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  onFileDrop: PropTypes.func,
  onCroppedImgCanvas: PropTypes.func,
  imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  imgCropperOptions: PropTypes.shape({
    classNameModal: PropTypes.string,
    classNameCropContainer: PropTypes.string,
    classNameBtnCrop: PropTypes.string,
    buttonLabel: PropTypes.string,
    checkImageOrigin: PropTypes.bool,
    aspectRatio: PropTypes.number,
    guides: PropTypes.bool,
    viewMode: PropTypes.number,
  }),
};

export default DropzoneBox;

const ModalCropContainer = React.memo(
  ({
    refFunc,
    imgCropperOptions = {},
    droppedFile,
    toggleImageCropper,
    onCropImage,
  }) => {
    return (
      <ModalWrapper
        className={classNames(imgCropperOptions.classNameModal)}
        toggleModal={toggleImageCropper}
      >
        <div
          className={classNames(
            styles.cropperContainer,
            imgCropperOptions.classNameCropContainer
          )}
        >
          <ImageCropper
            refFunc={refFunc}
            imageUrl={URL.createObjectURL(droppedFile)}
            checkImageOrigin={imgCropperOptions.checkImageOrigin || false}
            aspectRatio={imgCropperOptions.aspectRatio || 2 / 1}
            guides={imgCropperOptions.guides || false}
            viewMode={imgCropperOptions.viewMode || 1}
          />
        </div>
        <button
          className={classNames(
            styles.btnCrop,
            imgCropperOptions.classNameBtnCrop
          )}
          onClick={onCropImage}
        >
          {imgCropperOptions.buttonLabel || 'CROP'}
        </button>
      </ModalWrapper>
    );
  }
);

const MemoizedImage = React.memo(({ className, src }) => {
  return (
    <Image
      className={classNames(styles.dropzoneImg, className)}
      src={src}
      alt="Dropped image"
    />
  );
});
