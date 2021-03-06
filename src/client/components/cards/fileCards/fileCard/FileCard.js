import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CrossIcon from '@rc-lib-client/components/icons/crossIcon/CrossIcon';
import DocumentIcon from '@rc-lib-client/components/icons/documentIcon/DocumentIcon';
import VideoFileIcon from '@rc-lib-client/components/icons/videoFileIcon/VideoFileIcon';
import AudioFileIcon from '@rc-lib-client/components/icons/audioFileIcon/AudioFileIcon';
import styles from './fileCard.scss';

const FileCard = React.memo(
  ({
    className,
    onClick,
    file,
    onFileRemove,
    SlotLeft,
    SlotUnderImage,
    SlotBottom,
  }) => {
    const getIcon = (type, style) => {
      if (type.includes('audio/')) {
        return <AudioFileIcon style={style} />;
      } else if (type.includes('video/')) {
        return <VideoFileIcon style={style} />;
      } else {
        return <DocumentIcon style={style} />;
      }
    };

    const handleFileRemove = () => {
      onFileRemove(file);
    };

    const isImage = file.type.includes('image/');
    const icon = getIcon(file.type, { fill: 'black', height: '64px' });

    return (
      <div className={classNames(styles.fileCard, className)}>
        <div className={styles.imageContentContainer} onClick={onClick}>
          {SlotLeft && SlotLeft}
          <div className={styles.imageAndOptionContainer}>
            <div className={styles.imageOptions}>
              <CrossIcon
                onClick={handleFileRemove}
                crossColor="white"
                style={{
                  backgroundColor: 'rgba(46,46,46,0.85)',
                }}
              />
            </div>
            <div className={styles.imageContainer}>
              {isImage ? (
                <MemoizedImage className={styles.image} file={file} />
              ) : (
                <div className={styles.icon}>{icon}</div>
              )}
            </div>
            {SlotUnderImage && SlotUnderImage}
          </div>
        </div>
        {SlotBottom && SlotBottom}
      </div>
    );
  }
);

FileCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  file: PropTypes.object,
  onFileRemove: PropTypes.func,
  showDetails: PropTypes.bool,
  uploadProgress: PropTypes.number,
  SlotLeft: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  SlotBottom: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  SlotUnderImage: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default FileCard;

const MemoizedImage = React.memo(({ className, file }) => {
  return (
    <img
      className={className}
      src={URL.createObjectURL(file)}
      alt="Dropped image"
    />
  );
});
