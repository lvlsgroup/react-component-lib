import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Flex from '@rc-lib-client/components/flex/Flex';
import Input from '@rc-lib-client/components/inputs/input/Input';
import Button from '@rc-lib-client/components/inputs/button/Button';
import styles from './inputWithCounter.scss';

function InputWithCounter({
  className,
  classNameInput,
  classNameCounterBtn,
  classNameCounterBtnLabel,
  currentValue,
  onChange,
}) {
  function toggleMinus() {
    if (currentValue > 0) {
      onChange(currentValue - 1);
    }
  }

  function togglePlus() {
    onChange(currentValue + 1);
  }

  function handleInputChange(event) {
    const inputValue = parseInt(event.target.value);
    onChange(inputValue);
  }

  return (
    <Flex
      spaceBetween
      className={classNames(styles.inputWithCounter, className)}
    >
      <Button
        className={classNames(classNameCounterBtn, styles.counterBtn)}
        label={'-'}
        labelClassName={classNameCounterBtnLabel}
        onClick={toggleMinus}
      />
      <Input
        className={classNames(classNameInput, styles.input)}
        value={currentValue}
        type={'number'}
        onChange={handleInputChange}
      />
      <Button
        className={classNames(classNameCounterBtn, styles.counterBtn)}
        label={'+'}
        labelClassName={classNameCounterBtnLabel}
        onClick={togglePlus}
      />
    </Flex>
  );
}

InputWithCounter.propTypes = {
  className: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameCounterBtn: PropTypes.string,
  classNameCounterBtnLabel: PropTypes.string,
  onChange: PropTypes.func,
  currentValue: PropTypes.number,
};

export default React.memo(InputWithCounter);
