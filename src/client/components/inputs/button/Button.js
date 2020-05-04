import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '@rc-lib-client/components/icons/icon/Icon';
import styles from './button.scss';

function Button({
  className,
  type = 'button',
  disabled,
  label,
  labelClassName,
  startIcon,
  endIcon,
  onClick,
  ...rest
}) {
  const iconLeft = startIcon && getIcon(startIcon);
  const iconRight = endIcon && getIcon(endIcon);

  return (
    <button
      className={classNames(styles.iconButton, className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
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
  type: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  startIcon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  endIcon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default React.memo(Button);

function getIcon(PassedIcon) {
  return typeof PassedIcon === 'string' ? (
    <Icon iconClassName={PassedIcon} />
  ) : (
    PassedIcon
  );
}
