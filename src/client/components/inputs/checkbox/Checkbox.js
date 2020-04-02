import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './checkbox.scss';

function RightLabel({ rightLabel, labelClassName }) {
  return (
    <>
      {typeof rightLabel === 'string' ? (
        <span
          className={`${styles.rightLabel}${
            labelClassName ? ` ${labelClassName}` : ''
          }`}
        >
          {rightLabel}
        </span>
      ) : (
        rightLabel
      )}
    </>
  );
}

const Checkbox = React.memo((props) => {
  const {
    containerClassName,
    className,
    name,
    onChange,
    onBlur,
    isChecked,
    isDisabled,
    leftLabel,
    rightLabel,
    labelClassName,
    style,
  } = props;

  function getCheckboxLaneButtonClassNames() {
    return classNames({
      [styles.checkboxCheckedLaneButton]: true,
      [styles.isDisabled]: isDisabled,
      [containerClassName]: !!containerClassName,
    });
  }

  function handleChange(event) {
    onChange && onChange(event, props);
  }

  return (
    <label className={getCheckboxLaneButtonClassNames()}>
      {leftLabel && (
        <span
          className={`${styles.leftLabel}${
            labelClassName ? ` ${labelClassName}` : ''
          }`}
        >
          {leftLabel}
        </span>
      )}
      <input
        className={classNames(styles.inputCheckbox, className)}
        type="checkbox"
        name={name}
        disabled={isDisabled}
        checked={isChecked}
        onChange={handleChange}
        onBlur={onBlur}
      />
      <div style={style} />
      {rightLabel && (
        <RightLabel rightLabel={rightLabel} labelClassName={labelClassName} />
      )}
    </label>
  );
});

Checkbox.propTypes = {
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Checkbox;
