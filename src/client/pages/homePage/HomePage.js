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
import { ButtonLoaderDemo } from '@rc-lib-client/components/inputs/button/buttonDemo/ButtonDemo';
import PdfDownloadWrapper from '@rc-lib-client/components/pdfDownloadWrapper/PdfDownloadWrapper';
import ModalQuick from '@rc-lib-client/components/modals/modalQuick/ModalQuick';
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
        <Flex resColSystem="col12s1640">
          <input type="text" />
          <input type="text" />
        </Flex>
        <Toggler name="isBookable" />
        <Line />
        <h3>
          Hmm, placement of PdfDownloadWrapper seems to matter, if placed last
          on this page it doesnt work
        </h3>
        <div>
          <ModalQuick
            TriggerElement={<Button label={'CREATE PDF'} />}
            ModalContent={
              <PdfDownloadWrapper imageQuality={0.8}>
                <PdfPages />
              </PdfDownloadWrapper>
            }
          />
        </div>
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
        <ButtonLoaderDemo />
      </div>
    );
  }
}

export default HomePage;

function PdfPages({ className }) {
  return (
    <>
      <div className={styles.pdfPage}>
        <h3>EACH DIV IS A PAGE</h3>
        <p>hello</p>
      </div>
      <div className={styles.pdfPage}>
        <h3>SECOND PAGE</h3>
      </div>
      <div className={styles.pdfPage}>
        <h3>THIRD PAGE</h3>
      </div>
    </>
  );
}
