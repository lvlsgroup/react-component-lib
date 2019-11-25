import React from 'react';
import PropTypes from 'prop-types';
import CrossIcon from '@rc-lib-client/components/icons/crossIcon/CrossIcon';
import DocumentIcon from '@rc-lib-client/components/icons/documentIcon/DocumentIcon';
import VideoFileIcon from '@rc-lib-client/components/icons/videoFileIcon/VideoFileIcon';
import AudioFileIcon from '@rc-lib-client/components/icons/audioFileIcon/AudioFileIcon';
import ProgressBar from '@rc-lib-client/components/loaders/progressBar/ProgressBar';
import styles from './fileCard.scss';

function FileCard({
  className,
  onClick,
  file,
  onFileRemove,
  LeftSlot,
  uploadProgress,
}) {
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
    <div className={styles.fileCard}>
      <div
        className={`${styles.imageContentContainer}${
          className ? ` ${className}` : ''
        }`}
        onClick={onClick}
      >
        {LeftSlot && LeftSlot}
        <div className={styles.imageAndOptionContainer}>
          <div className={styles.imageOptions}>
            <CrossIcon
              onClick={handleFileRemove}
              crossColor="white"
              style={{
                borderRadius: '50%',
                backgroundColor: 'rgba(46,46,46,0.85)',
              }}
            />
          </div>
          <div className={styles.imageContainer}>
            {isImage ? (
              <img
                className={styles.image}
                src={URL.createObjectURL(file)}
                alt="Dropped image"
              />
            ) : (
              <div className={styles.icon}>{icon}</div>
            )}
          </div>
        </div>
      </div>
      {uploadProgress && <ProgressBar progress={uploadProgress} />}
    </div>
  );
}

FileCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  file: PropTypes.object,
  onFileRemove: PropTypes.func,
  showDetails: PropTypes.bool,
  uploadProgress: PropTypes.number,
  LeftSlot: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default FileCard;
