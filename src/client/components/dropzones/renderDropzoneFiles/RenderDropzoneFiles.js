import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'cropperjs/dist/cropper.css';
import {
  imArrayMerge,
  imDeleteItemFromArray,
} from '@rc-lib-client/shared/utils/immutableUtils/immutableUtils';
import { getIdFromFile } from '@rc-lib-client/shared/utils/fileUtils/fileutils';
import DropzoneWrapper from '@rc-lib-client/components/dropzones/dropzoneWrapper/DropzoneWrapper';
import styles from './renderDropzoneFiles.scss';

class RenderDropzoneFiles extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  handleFileRemove = (file) => {
    this.setState((prevState) => {
      return {
        files: imDeleteItemFromArray(prevState.files, file),
      };
    });
  };

  handleFileDrop = (files) => {
    const alreadyDroppedFile = this.state.files.find((droppedFile) => {
      return files.find((file) => {
        const first = getIdFromFile(file);
        const second = getIdFromFile(droppedFile);
        return first === second;
      });
    });

    if (!alreadyDroppedFile) {
      this.setState((prevState) => {
        return {
          files: imArrayMerge(prevState.files, files),
        };
      });
    } else {
      if (this.props.onDropDuplicate) {
        this.props.onDropDuplicate(alreadyDroppedFile);
      }
    }
  };

  render() {
    const { className, render } = this.props;
    const { files } = this.state;

    return (
      <div className={classNames(styles.renderDropzoneFiles, className)}>
        <DropzoneWrapper onFileDrop={this.handleFileDrop}>
          {render && render(files, this.handleFileRemove)}
        </DropzoneWrapper>
      </div>
    );
  }
}

RenderDropzoneFiles.propTypes = {
  className: PropTypes.string,
  render: PropTypes.func,
  onDropDuplicate: PropTypes.func,
};

export default RenderDropzoneFiles;

export function withDropzoneFiles(Component) {
  return class extends React.PureComponent {
    renderComponentWithDroppedFiles = (droppedFiles, handleFileRemove) => {
      return (
        <Component
          {...this.props}
          droppedFiles={droppedFiles}
          onFileRemove={handleFileRemove}
        />
      );
    };

    render() {
      return (
        <RenderDropzoneFiles render={this.renderComponentWithDroppedFiles} />
      );
    }
  };
}
