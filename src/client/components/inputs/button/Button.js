import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '@rc-lib-client/components/icons/icon/Icon';
import styles from './button.scss';

function Button({
  className,
  disabled,
  label,
  labelClassName,
  startIcon,
  startIconClassName,
  startIconProps,
  endIcon,
  endIconClassName,
  endIconProps,
  onClick,
  ...props
}) {
  const iconLeft =
    startIcon && getIconType(startIcon, startIconClassName, startIconProps);
  const iconRight =
    endIcon && getIconType(endIcon, endIconClassName, endIconProps);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.iconButton, className)}
      {...props}
    >
      {iconLeft && iconLeft}
      {label && (
        <span
          className={classNames(
            iconLeft && styles.marginLeft,
            iconRight && styles.marginRight,
            labelClassName && labelClassName
          )}
        >
          {label}
        </span>
      )}
      {iconRight && iconRight}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  startIconClassName: PropTypes.string,
  endIconClassName: PropTypes.string,
  startIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  endIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  startIconProps: PropTypes.object,
  endIconProps: PropTypes.object,
};

export default React.memo(Button);

function getIconType(PassedIcon, className, passedProps) {
  return typeof PassedIcon === 'string' ? (
    <Icon className={classNames(className)} iconClassName={PassedIcon} />
  ) : (
    <PassedIcon className={classNames(className)} {...passedProps} />
  );
}
