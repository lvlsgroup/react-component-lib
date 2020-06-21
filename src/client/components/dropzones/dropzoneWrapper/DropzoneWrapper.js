import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';
import styles from './dropzoneWrapper.scss';

function DropzoneWrapper({
  dropzoneRef,
  expandWithHeight,
  centralizeChildren,
  children,
  onFileDrop,
  multiple,
}) {
  return (
    <Dropzone ref={dropzoneRef} multiple={multiple} onDrop={onFileDrop}>
      {({ getRootProps, getInputProps }) => {
        return (
          <section
            className={classNames(expandWithHeight && styles.expandWithHeight)}
          >
            <div
              className={classNames(
                styles.dropzoneContainer,
                expandWithHeight && styles.expandWithHeight,
                centralizeChildren && styles.centralizeChildren
              )}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {children}
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
}

DropzoneWrapper.propTypes = {
  dropzoneRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  expandWithHeight: PropTypes.bool,
  centralizeChildren: PropTypes.bool,
  onFileDrop: PropTypes.func,
  multiple: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default DropzoneWrapper;
