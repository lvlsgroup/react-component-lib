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
    checkerClassName,
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

  console.log('isChecked: ', isChecked);

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
        className={classNames(styles.inputCheckBox, checkerClassName)}
        type="checkbox"
        name={name}
        disabled={isDisabled}
        checked={isChecked}
        onChange={handleChange}
        onBlur={onBlur}
      />
      <span
        className={classNames(styles.customCheckbox, className)}
        style={style}
      />
      {rightLabel && (
        <RightLabel rightLabel={rightLabel} labelClassName={labelClassName} />
      )}
    </label>
  );
});

Checkbox.propTypes = {
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  checkerClassName: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelClassName: PropTypes.string,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Checkbox;
