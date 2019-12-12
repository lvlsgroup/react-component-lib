import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '@rc-lib-client/components/icons/icon/Icon';
import styles from './iconButton.scss';

export const IconButton = ({
  className,
  disabled,
  onClick,
  icon,
  iconClassName,
  ...props
}) => {
  const iconElement = icon && getIcon(icon, iconClassName);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.iconButton, className)}
      {...props}
    >
      {iconElement && iconElement}
    </button>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  iconClassName: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
};

function getIcon(icon, className) {
  return typeof icon === 'string' ? (
    <Icon className={classNames(className)} iconClassName={icon} />
  ) : (
    icon
  );
}
