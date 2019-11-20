import React from 'react';
import InputGroup from '@rc-lib-client/components/formComponents/inputGroup/InputGroup';
import Dropdown from '@rc-lib-client/components/formComponents/dropdown/Dropdown';
import styles from './homePage.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: { id: 1, title: 'FIRST' },
    };
  }

  handleSelectItem = (selectedItem) => {
    this.setState({
      selectedItem: selectedItem,
    });
  };

  render() {
    return (
      <div className={styles.homeRoute}>
        <h1 className={styles.title}>Home page</h1>
        <Dropdown
          list={[
            { id: 1, title: 'FIRST' },
            { id: 2, title: 'SECOND' },
            { id: 3, title: 'THIRD' },
          ]}
          selectedItem={this.state.selectedItem}
          onSelectItem={this.handleSelectItem}
        />
        <InputGroup
          className={styles.progress}
          labelText="Namn"
          leftLabel={true}
          progress={33}
        />
        <InputGroup
          className={styles.progress}
          labelText="LastName"
          leftLabel={true}
          progress={33}
        />
        <InputGroup
          className={styles.progress}
          labelText="Address"
          leftLabel={true}
          progress={33}
        />
      </div>
    );
  }
}

export default HomePage;
