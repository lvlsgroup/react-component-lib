import React from 'react';
import classNames from 'classnames';
import InputDatePicker from '@rc-lib-client/components/datePickers/inputDatePicker/InputDatePicker';
import DropdownSelector from '@rc-lib-client/components/selectors/dropdownSelector/DropdownSelector';
import AnimatedCarousel from '@rc-lib-client/components/carousels/animatedCarousel/AnimatedCarousel';
import SwipeCarousel from '@rc-lib-client/components/carousels/swipeCarousel/SwipeCarousel';
import DropzoneBox from '@rc-lib-client/components/dropzones/dropzoneBox/DropzoneBox';
import Button from '@rc-lib-client/components/inputs/button/Button';
import ToggleArrowSvg from '@rc-lib-client/components/icons/arrowSvg/ToggleArrowSvg';
import styleHelper from '@rc-lib-client/shared/styles/styleHelper.scss';
import Flex from '@rc-lib-client/components/flex/Flex';
import Grid from '@rc-lib-client/components/grid/Grid';
import Line from '@rc-lib-client/components/helpers/line/Line';
import {
  InputTagCreatorDemoClassNames,
  InputTagCreatorDemoJsStyles,
} from '@rc-lib-client/components/inputs/inputTagCreator/inputTagCreatorDemo/InputTagCreatorDemo';
import InputTagCreator from '@rc-lib-client/components/inputs/inputTagCreator/InputTagCreator';
import { CheckmarkFatUtf } from '@rc-lib-client/components/icons/checkMarks/checkMarks';
import Checkbox from '@rc-lib-client/components/inputs/checkbox/Checkbox';
import UrlCheckbox from '@rc-lib-client/components/urlinputs/urlCheckbox/UrlCheckbox';
import UrlInputDemo from '@rc-lib-client/components/urlinputs/urlInput/urlInputDemo/UrlInputDemo';
import Input from '@rc-lib-client/components/inputs/input/Input';
import {
  TogglerAcampDemo,
  TogglerDemo,
  TogglerWithJsSize,
  TogglerWithText,
} from '@rc-lib-client/components/inputs/toggler/togglerDemo/TogglerDemo';
import UrlPagination from '@rc-lib-client/components/pagination/urlPagination/UrlPagination';
import Icon from '@rc-lib-client/components/icons/icon/Icon';
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
        <Flex>
          <h1 className={styles.title}>Home page</h1>
          <Icon iconClassName={styleHelper.iconasterisk} />
        </Flex>
        <div>
          <h5>TogglerDemo</h5>
          <TogglerDemo name="isBookable" />
        </div>
        <div>
          <h5>TogglerWithText</h5>
          <TogglerWithText />
        </div>
        <div>
          <h5>TogglerWithJsSize</h5>
          <TogglerWithJsSize />
        </div>
        <div>
          <h5>TogglerAcampDemo</h5>
          <TogglerAcampDemo />
        </div>
        <InputTagCreator instanceId={'1'} />
        <InputTagCreatorDemoJsStyles instanceId={'2'} />
        <InputTagCreatorDemoClassNames instanceId={'3'} />
        <Flex dontExpandChildren>
          <div>input</div>
          <input type="text" />
          <div>Input</div>
          <Input />
          <div>Input inputSizeLg</div>
          <Input inputSize="inputSizeMd" />
        </Flex>
        <Flex>
          <Flex flexNr={1}>HELLO</Flex>
          <Flex flexNr={1}>HELLO</Flex>
        </Flex>
        <div>
          <Flex>
            <Button
              label={`Button`}
              className={styles.button}
              startIcon={
                <ToggleArrowSvg
                  color={'blue'}
                  onToggle={this.state.isToggled}
                />
              }
              onClick={() => console.log('hello')}
              endIcon={styleHelper.iconCoffee}
            />
            <DropdownSelector
              selected={[{ value: 'vanilla', label: 'Vanilla' }]}
              instanceId={'someId2'}
              options={options}
              onChange={(e) => {
                console.log('hello', e);
              }}
            />
          </Flex>
          <Flex resClassNameContainer={styles.mgt16} resColSystem="col12s1640">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </Flex>
        </div>
        <Flex resClassNameContainer={styles.mgt16} resColSystem="col12s1640">
          <div style={{ backgroundColor: 'lightBlue' }}>1</div>
          <div style={{ backgroundColor: 'lightBlue' }}>1</div>
          <div style={{ backgroundColor: 'lightBlue' }}>1</div>
        </Flex>
        <div>
          <h5>col12_1616</h5>
          <Flex resClassNameContainer={styles.mgt16} resColSystem="col12_s1616">
            <div style={{ backgroundColor: 'lightYellow' }}>1</div>
            <div style={{ backgroundColor: 'lightYellow' }}>1</div>
            <div style={{ backgroundColor: 'lightYellow' }}>1</div>
          </Flex>
        </div>
        <div>
          <h5>col222s1616</h5>
          <Flex resClassNameContainer={styles.mgt16} resColSystem="col222s1616">
            <div style={{ backgroundColor: 'lightGreen' }}>1</div>
            <div style={{ backgroundColor: 'lightGreen' }}>1</div>
            <div style={{ backgroundColor: 'lightGreen' }}>1</div>
          </Flex>
        </div>
        <div>
          <h5>FLEX</h5>
          <Flex>
            <div style={{ backgroundColor: 'lightGreen' }}>1</div>
            <div
              className={styles.secondCol}
              style={{ backgroundColor: 'lightGreen' }}
            >
              1
            </div>
          </Flex>
        </div>
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
        <InputDatePicker selected={new Date()} SlotBottom={<h1>HELLO</h1>} />
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
        <CheckmarkFatUtf />
        <Checkbox style={{ borderRadius: '50%' }} />
        <Checkbox isDisabled />
        <Checkbox className={styles.checkboxProp} rightLabel={'CHECK ME'} />
        <UrlCheckbox
          className={styles.checkboxProp}
          searchParam={'selected'}
          value={'some-id'}
        />
        <UrlInputDemo />
        <h2>Pagination demos</h2>
        <UrlPagination
          classNamePaginationButton={styles.paginationButtonProp}
          dontScrollToTop
          pageCount={20}
          numberOfPagesToShow={11}
          slotNext={<IconArrowNext />}
          slotLast={
            <>
              <IconArrowNext />
              <IconArrowNext />
            </>
          }
          slotPrevious={<IconArrowNext className={styles.iconPreviousProp} />}
          slotFirst={
            <>
              <IconArrowNext className={styles.iconPreviousProp} />
              <IconArrowNext className={styles.iconPreviousProp} />
            </>
          }
        />
        <UrlPagination
          dontScrollToTop
          pageCount={20}
          slotFirst={'First'}
          slotPrevious={'Previous'}
          slotNext={'Next'}
          slotLast={'Last'}
        />
        <UrlPagination
          dontScrollToTop
          pageCount={20}
          slotFirst={'First'}
          slotLast={'Last'}
          classNameFirstLastButtons={styles.paginationFirstLastProp}
        />
        <UrlPagination
          dontScrollToTop
          pageCount={20}
          showEndOfRangeButtons={false}
          numberOfPagesToShow={3}
          classNamePaginationButton={styles.paginationButtonProp2}
          classNamePreviousNextButtons={styles.paginationPreviousNextProp}
        />
      </div>
    );
  }
}

export default HomePage;

const IconArrowNext = ({ className }) => (
  <svg className={classNames(className)} height="14" width="8">
    <path d={'M 2 2 L 6 7 L 2 12'} stroke={'black'} />
  </svg>
);
