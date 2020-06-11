import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '@rc-lib-client/components/inputs/input/Input';
import styles from './styles.scss';

const InputGroup = React.memo(
  ({
    className,
    inputClassName,
    formLabelClassName,
    errorTextClassName,
    labelText,
    name,
    value,
    onChange,
    onBlur,
    autoComplete,
    isDisabled,
    readOnly,
    type,
    tabIndex,
    defaultValue,
    errorLabel,
    placeholder,
    leftLabel,
  }) => {
    return (
      <div
        className={classNames(
          styles.inputGroup,
          className,
          leftLabel && styles.leftLabel
        )}
      >
        {labelText && (
          <label
            className={classNames(
              styles.formLabel,
              formLabelClassName,
              leftLabel && styles.leftLabel
            )}
          >
            {labelText}
          </label>
        )}
        <Input
          placeholder={placeholder}
          className={classNames(
            inputClassName,
            leftLabel && styles.leftLabelInput
          )}
          disabled={isDisabled}
          readOnly={readOnly}
          autoComplete={autoComplete}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          defaultValue={defaultValue}
          tabIndex={tabIndex}
        />
        {errorLabel && (
          <span
            className={`${styles.errorText}${
              errorTextClassName ? ` ${errorTextClassName}` : ''
            }`}
          >
            {errorLabel}
          </span>
        )}
      </div>
    );
  }
);

InputGroup.propTypes = {
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  formLabelClassName: PropTypes.string,
  errorTextClassName: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.string,
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  tabIndex: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errorLabel: PropTypes.string,
  placeholder: PropTypes.string,
  leftLabel: PropTypes.bool,
};

export default InputGroup;
