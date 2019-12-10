import React from 'react';
import InputDatePicker from '@rc-lib-client/components/datePickers/inputDatePicker/InputDatePicker';
import DropdownSelector from '@rc-lib-client/components/selectors/dropdownSelector/DropdownSelector';
import Toggler from '@rc-lib-client/components/inputs/toggler/Toggler';
import { Button } from '@rc-lib-client/components/inputs/button/Button';
import ToggleArrowSvg from '@rc-lib-client/components/icons/arrowSvg/ToggleArrowSvg';
import styleHelper from '@rc-lib-client/shared/styles/styleHelper.scss';
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
        <Toggler name="isBookable" />
        <InputDatePicker selected={new Date()} />
        <DropdownSelector
          selected={[{ value: 'vanilla', label: 'Vanilla' }]}
          instanceId={'someId'}
          options={options}
          onChange={(e) => {
            console.log('hello', e);
          }}
        />
        <Button
          className={styles.button}
          endIcon={<ToggleArrowSvg color={'lightblue'} />}
          startIcon={styleHelper.iconCoffee}
          startIconClassName={styles.testIcon}
        >
          Button
        </Button>
      </div>
    );
  }
}

export default HomePage;
