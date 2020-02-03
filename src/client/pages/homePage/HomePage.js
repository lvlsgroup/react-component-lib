import React from 'react';
import InputDatePicker from '@rc-lib-client/components/datePickers/inputDatePicker/InputDatePicker';
import DropdownSelector from '@rc-lib-client/components/selectors/dropdownSelector/DropdownSelector';
import AnimatedCarousel from '@rc-lib-client/components/carousels/animatedCarousel/AnimatedCarousel';
import SwipeCarousel from '@rc-lib-client/components/carousels/swipeCarousel/SwipeCarousel';
import DropzoneBox from '@rc-lib-client/components/dropzones/dropzoneBox/DropzoneBox';
import Button from '@rc-lib-client/components/inputs/button/Button';
import Toggler from '@rc-lib-client/components/inputs/toggler/Toggler';
import ToggleArrowSvg from '@rc-lib-client/components/icons/arrowSvg/ToggleArrowSvg';
import styleHelper from '@rc-lib-client/shared/styles/styleHelper.scss';
import Flex from '@rc-lib-client/components/flex/Flex';
import Grid from '@rc-lib-client/components/grid/Grid';
import Line from '@rc-lib-client/components/helpers/line/Line';
import styles from './homePage.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const newsList = [
  { id: 'chocolate', text: 'Chocolate' },
  { id: 'strawberry', text: 'Strawberry' },
  { id: 'vanilla', text: 'Vanilla' },
];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: { id: 1, title: 'FIRST' },
      droppedFile: '',
    };
  }

  onFileDrop = (file) => {
    this.setState(() => {
      return {
        file: file,
      };
    });
  };

  render() {
    return (
      <div className={styles.homeRoute}>
        <h1 className={styles.title}>Home page</h1>
        <Flex resColSystem="col12s1640">
          <input type="text" />
          <input type="text" />
        </Flex>
        <Toggler name="isBookable" />
        <Line />
        <Grid resColSystem="res1234" colGap="10px" rowGap="10px">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </Grid>
        <DropzoneBox
          file={this.state.file}
          onCroppedImgCanvas={this.onFileDrop}
        />
        <AnimatedCarousel
          className={styles.rollingSliderProp}
          animationDuration={16}
        >
          {newsList.map((newsItem) => {
            return <div key={newsItem.id}>{newsItem.text}</div>;
          })}
        </AnimatedCarousel>
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
          label={`Button`}
          className={styles.button}
          startIcon={
            <ToggleArrowSvg color={'blue'} onToggle={this.state.isToggled} />
          }
          onClick={this.handleToggle}
          endIcon={styleHelper.iconCoffee}
        />
        <SwipeCarousel autoplay={true}>
          <div>
            <h1 className={styles.title}>Home1</h1>
            <p>Hej</p>
          </div>
          <div>
            <h1 className={styles.title}>Home1</h1>
            <p>Hej</p>
          </div>
          <div>
            <h1 className={styles.title}>Home1</h1>
            <p>Hej</p>
          </div>
        </SwipeCarousel>
      </div>
    );
  }
}

export default HomePage;
