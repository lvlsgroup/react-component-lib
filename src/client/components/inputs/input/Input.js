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
    onBlur,
    autoComplete,
    isDisabled,
    readOnly,
    type,
    tabIndex,
    placeholder,
    defaultValue,
    onClick,
    inputSize,
  }) => {
    function handleChange(event) {
      onChange(event, { name });
    }

    return (
      <input
        className={classNames(styles.input, styles[inputSize], className)}
        disabled={isDisabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
        type={type}
        name={name}
        onChange={onChange && handleChange}
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
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
};

export default Input;
