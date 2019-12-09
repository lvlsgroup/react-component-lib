import React from 'react';
import PropTypes from 'prop-types';
import FileEditListing from '@rc-lib-client/components/dropzones/renderDropzoneFiles/demo/FileEditListing';
import CrossIcon from '@rc-lib-client/components/icons/crossIcon/CrossIcon';
import InputDatePicker from '@rc-lib-client/components/datePickers/inputDatePicker/InputDatePicker';
import DropdownSelector from '@rc-lib-client/components/selectors/dropdownSelector/DropdownSelector';
import styles from './homePage.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: { id: 1, title: 'FIRST' },
    };
  }

  render() {
    return (
      <div className={styles.homeRoute}>
        <h1 className={styles.title}>Home page</h1>
        <CrossIcon
          onClick={() => {}}
          crossColor="white"
          style={{
            backgroundColor: 'rgba(46,46,46,0.85)',
          }}
        />
        <FileEditListing />
        <InputDatePicker selected={new Date()} />
        <DropdownSelector
          selected={[{ value: 'vanilla', label: 'Vanilla' }]}
          instanceId={'someId'}
          options={options}
          onChange={(e) => {
            console.log('hello', e);
          }}
        />
      </div>
    );
  }
}

export default HomePage;
