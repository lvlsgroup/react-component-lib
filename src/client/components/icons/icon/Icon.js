import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Icon({ iconClassName, className, onClick }) {
  return (
    <i className={classNames(className, iconClassName)} onClick={onClick} />
  );
}

Icon.propTypes = {
  // use to identify which icon to use. import from styleHelper
  iconClassName: PropTypes.string,
  // use to style the icon. things like font-size and color
  className: PropTypes.string,
};
