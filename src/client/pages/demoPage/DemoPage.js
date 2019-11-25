import React from 'react';
import InputGroup from '@rc-lib-client/components/formComponents/inputGroup/InputGroup';
import Dropdown from '@rc-lib-client/components/formComponents/dropdown/Dropdown';
import DropDownMenu from '@rc-lib-client/containers/dropDownMenu/DropDownMenu';
import styles from './demoPage.scss';

const dropDownMenuEntries = {
  data: [
    {
      name: 'title1',
      route: '/',
    },
    {
      name: 'title2',
      route: '/',
    },
    {
      name: 'title3',
      route: '/',
    },
  ],
};

class DemoPage extends React.Component {
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
      <div className={styles.demoRoute}>
        <h1 className={styles.title}>Demo page</h1>
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
        <div className={styles.itemWithDropDown}>
          DropDownMenu
          <DropDownMenu
            items={dropDownMenuEntries.data}
            className={styles.dropDownMenu}
          />
        </div>
      </div>
    );
  }
}

export default DemoPage;
