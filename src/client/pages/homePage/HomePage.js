import React from 'react';
import FileEditListing from '@rc-lib-client/components/dropzones/renderDropzoneFiles/demo/FileEditListing';
import CrossIcon from '@rc-lib-client/components/icons/crossIcon/CrossIcon';
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
        <CrossIcon
          onClick={() => {}}
          crossColor="white"
          style={{
            backgroundColor: 'rgba(46,46,46,0.85)',
          }}
        />
        <FileEditListing />
      </div>
    );
  }
}

export default HomePage;
