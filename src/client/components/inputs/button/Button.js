import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '@rc-lib-client/components/icons/icon/Icon';
import styles from './button.scss';

export const Button = ({
  className,
  disabled,
  children,
  startIcon,
  startIconClassName,
  endIcon,
  endIconClassName,
  ...props
}) => {
  const iconLeft = startIcon && getIcon(startIcon, startIconClassName);
  const iconRight = endIcon && getIcon(endIcon, endIconClassName);

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(styles.iconButton, className)}
      {...props}
    >
      {iconLeft && <span className={styles.startIcon}>{iconLeft}</span>}
      {children && children}
      {iconRight && <span className={styles.endIcon}>{iconRight}</span>}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
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
  children: PropTypes.string,
};

function getIcon(icon, className) {
  return typeof icon === 'string' ? (
    <Icon className={classNames(className)} iconClassName={icon} />
  ) : (
    icon
  );
}
