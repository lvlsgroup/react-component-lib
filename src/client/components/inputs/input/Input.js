import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const Input = React.memo(
  ({
    className,
    name,
    value,
    onChange,
    onKeyDown,
    onBlur,
    autoComplete,
    isDisabled,
    readOnly,
    type,
    tabIndex,
    placeholder,
    defaultValue,
    onClick,
    inputRef,
    inputSize,
    regexAllowOnly,
  }) => {
    function handleChange(event) {
      if (regexAllowOnly) {
        const value = event.target.value;
        if (value === '') {
          onChange(event, { name });
        } else if (value.match(regexAllowOnly)) {
          onChange(event, { name });
        }
      } else {
        onChange(event, { name });
      }
    }

    return (
      <input
        className={classNames(styles.input, styles[inputSize], className)}
        disabled={isDisabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
        type={type}
        ref={inputRef}
        name={name}
        onChange={onChange && handleChange}
        onKeyDown={onKeyDown && onKeyDown}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        tabIndex={tabIndex}
        placeholder={placeholder}
        onClick={onClick}
      />
    );
  }
);

const INPUT_SIZE = ['inputSizeMd', 'inputSizeMdL', 'inputSizeLg'];

Input.propTypes = {
  className: PropTypes.string,
  inputSize: PropTypes.oneOf(INPUT_SIZE),
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  tabIndex: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  regexAllowOnly: PropTypes.instanceOf(RegExp),
};

export default Input;

export const ONLY = {
  DIGITS: /^\d+$/,
};
