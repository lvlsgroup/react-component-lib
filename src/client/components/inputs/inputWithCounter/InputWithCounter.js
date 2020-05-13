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
  placeholder,
  onChange,
  isDisabled,
  maxRange,
  minRange,
  disableMinusBtn,
  disablePlusBtn,
  disableInput,
}) {
  function toggleMinus() {
    const value = typeof currentValue === 'undefined' ? 0 : currentValue;

    if (minRange) {
      if (value > minRange) {
        onChange(value - 1);
      }
    } else {
      onChange(value - 1);
    }
  }

  function togglePlus() {
    const value = typeof currentValue === 'undefined' ? 0 : currentValue;

    if (maxRange) {
      if (value < maxRange) {
        onChange(value + 1);
      }
    } else {
      onChange(value + 1);
    }
  }

  function handleInputChange(event) {
    const inputValue = parseInt(event.target.value);

    if (isNaN(inputValue)) {
      onChange(undefined);
    } else {
      if (maxRange || minRange) {
        if (inputValue <= maxRange && inputValue >= minRange) {
          onChange(inputValue);
        }
      } else {
        onChange(inputValue);
      }
    }
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
        disabled={disableMinusBtn || isDisabled}
      />
      <Input
        className={classNames(classNameInput, styles.input)}
        value={currentValue === 0 ? currentValue : currentValue || ''}
        type={'number'}
        onChange={handleInputChange}
        isDisabled={disableInput || isDisabled}
        placeholder={placeholder}
      />
      <Button
        className={classNames(classNameCounterBtn, styles.counterBtn)}
        label={'+'}
        labelClassName={classNameCounterBtnLabel}
        onClick={togglePlus}
        disabled={disablePlusBtn || isDisabled}
      />
    </Flex>
  );
}

InputWithCounter.propTypes = {
  className: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameCounterBtn: PropTypes.string,
  classNameCounterBtnLabel: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  currentValue: PropTypes.number,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  maxRange: PropTypes.number,
  minRange: PropTypes.number,
  disableMinusBtn: PropTypes.bool,
  disableInput: PropTypes.bool,
  disablePlusBtn: PropTypes.bool,
};

export default React.memo(InputWithCounter);
