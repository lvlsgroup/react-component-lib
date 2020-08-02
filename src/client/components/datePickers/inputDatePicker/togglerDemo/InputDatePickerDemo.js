import React from 'react';
import classNames from 'classnames';
import InputDatePicker from '@rc-lib-client/components/datePickers/inputDatePicker/InputDatePicker';
import styles from './inputDatePickerDemo.scss';

function InputDatePickerDemo() {
  const startDate = Date.now();

  return (
    <InputDatePicker
      className={classNames(styles.inputDatePickerDemo)}
      selected={startDate}
      placeholder={'Some placeholder'}
    />
  );
}

export { InputDatePickerDemo };
