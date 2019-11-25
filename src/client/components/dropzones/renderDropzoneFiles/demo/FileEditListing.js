import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withDropzoneFiles } from '@rc-lib-client/components/dropzones/renderDropzoneFiles/RenderDropzoneFiles';
import { getIdFromFile } from '@rc-lib-client/shared/utils/fileUtils/fileutils';
import Dropdown from '@rc-lib-client/components/formComponents/dropdown/Dropdown';
import InputGroup from '@rc-lib-client/components/formComponents/inputGroup/InputGroup';
import {
  imSetToArray,
  imSetToObj,
} from '@rc-lib-client/shared/utils/immutableUtils/immutableUtils';
import FileCard from '@rc-lib-client/components/cards/fileCards/fileCard/FileCard';
import styles from './fileEditListing.scss';

class FileEditListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filesWithMetadata: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.droppedFiles !== this.props.droppedFiles) {
      this.setState(() => ({
        filesWithMetadata: this.props.droppedFiles.map((file) => ({
          file: file,
          title: '',
          description: '',
          date: '',
          contributors: '',
        })),
      }));
    }
  }

  onDone = (event) => {
    event.stopPropagation();
    const { filesWithMetadata } = this.state;
    console.log('values: ', filesWithMetadata);
  };

  handleChange = (formField, name, value) => {
    this.setState(({ filesWithMetadata }) => {
      const index = filesWithMetadata.findIndex((arrayItem) => {
        return arrayItem === formField;
      });

      const file = imSetToObj(filesWithMetadata[index], name, value);

      return {
        filesWithMetadata: imSetToArray(filesWithMetadata, file, null, index),
      };
    });
  };

  render() {
    const { className, onFileRemove } = this.props;
    const { filesWithMetadata } = this.state;

    return (
      <div>
        <div>Ladda upp din bild här</div>
        {filesWithMetadata &&
          filesWithMetadata.length > 0 &&
          filesWithMetadata.map((imgWithMetadata) => {
            const key = getIdFromFile(imgWithMetadata.file);

            return (
              <FileCard
                onClick={(e) => e.stopPropagation()}
                key={key}
                file={imgWithMetadata.file}
                onFileRemove={onFileRemove}
                uploadProgress={44}
                LeftSlot={
                  <FormGroupDynamic
                    onChange={this.handleChange}
                    formFields={imgWithMetadata}
                  />
                }
              />
            );
          })}
        <button onClick={this.onDone}>Done</button>
      </div>
    );
  }
}

FileEditListing.propTypes = {
  className: PropTypes.string,
  render: PropTypes.func,
  onDropDuplicate: PropTypes.func,
};

export default withDropzoneFiles(FileEditListing);

const FormGroupDynamic = ({ className, onChange, formFields }) => {
  const [selectedItem, setSelectedItem] = useState({ id: 1, title: 'First' });

  function handleSelectedItem(selectedItem) {
    setSelectedItem(selectedItem);
  }

  function handleChange(event, props) {
    const value = event.target.value;
    const name = props.name;
    onChange(formFields, name, value);
  }

  return (
    <div className={classNames(styles.formGroupDynamic, className)}>
      <h3>Default meta data for all images</h3>
      <div>
        <label className={styles.formLabel}>Category</label>
        <Dropdown
          list={[
            { id: 1, title: 'First' },
            { id: 2, title: 'SECOND' },
            { id: 3, title: 'THIRD' },
          ]}
          selectedItem={selectedItem}
          onSelectItem={handleSelectedItem}
        />
      </div>
      {Object.entries(formFields).map(([key, value]) => {
        if (typeof value === 'object') {
          return null;
        }

        return (
          <InputGroup
            key={key}
            className={styles.inputGroupProp}
            name={key}
            labelText={key.replace(/^\w/, (c) => c.toUpperCase())}
            value={value}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
};
