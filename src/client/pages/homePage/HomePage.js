import React from 'react';
import FileEditListing from '@rc-lib-client/components/dropzones/renderDropzoneFiles/demo/FileEditListing';
import styles from './homePage.scss';

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
        <FileEditListing />
      </div>
    );
  }
}

export default HomePage;
