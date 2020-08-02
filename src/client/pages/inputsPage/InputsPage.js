import React from 'react';
import Flex from '@rc-lib-client/components/flex/Flex';
import {
  TogglerAcampDemo,
  TogglerDemo,
  TogglerWithJsSize,
  TogglerWithText,
} from '@rc-lib-client/components/inputs/toggler/togglerDemo/TogglerDemo';
import {
  InputWithCounterAllerDemo,
  InputWithCounterDemo,
  InputWithCounterDisabled,
  InputWithCounterMaxRange3Demo,
} from '@rc-lib-client/components/inputs/inputWithCounter/inputWithCounterDemo/inputWithCounterDemos';
import InputDatePicker from '@rc-lib-client/components/datePickers/inputDatePicker/InputDatePicker';
import { isToday } from '@rc-lib-client/shared/utils/dateUtils/DateUtils';
import { InputDatePickerDemo } from '@rc-lib-client/components/datePickers/inputDatePicker/togglerDemo/InputDatePickerDemo';
import styles from './inputsPage.scss';

class InputsPage extends React.Component {
  render() {
    return (
      <div className={styles.inputsPage}>
        <h1>Inputs Page</h1>
        <section>
          <h3 className={styles.sectionTitle}>Togglers</h3>
          <Flex spaceBetween>
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
          </Flex>
        </section>
        <section>
          <h3 className={styles.sectionTitle}>Input Counters</h3>
          <Flex spaceBetween>
            <InputWithCounterDemo />
            <InputWithCounterMaxRange3Demo />
            <InputWithCounterAllerDemo />
            <InputWithCounterDisabled />
          </Flex>
        </section>
        <section>
          <h3 className={styles.sectionTitle}>Input Datepickers</h3>
          <Flex spaceBetween>
            <InputDatePicker
              selected={new Date()}
              SlotBottom={<h1>HELLO</h1>}
              dayClassName={(date) =>
                isToday(date) ? undefined : styles.inputDatePickerDay
              }
            />
            <InputDatePicker
              selected={new Date()}
              noBorderPopper
              hideTopTriangleClipPath
            />
            <InputDatePickerDemo />
          </Flex>
        </section>
      </div>
    );
  }
}

export default InputsPage;
