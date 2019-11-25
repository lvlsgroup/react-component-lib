import React from 'react';
import PropTypes from 'prop-types';
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
  }) => {
    function handleChange(event) {
      onChange(event, { name });
    }

    return (
      <input
        className={`${styles.input}${className ? ` ${className}` : ''}`}
        disabled={isDisabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
        type={type}
        name={name}
        onChange={handleChange}
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

Input.propTypes = {
  className: PropTypes.string,
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
