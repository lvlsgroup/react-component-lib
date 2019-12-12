import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Icon({ iconClassName, className, onClick }) {
  return onClick ? (
    <button className={classNames(className)} onClick={onClick}>
      <i className={classNames(iconClassName)} />
    </button>
  ) : (
    <i className={classNames(className, iconClassName)} />
  );
}

Icon.propTypes = {
  // use to identify which icon to use. import from styleHelper
  iconClassName: PropTypes.string,
  // use to style the icon. things like font-size and color
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(Icon);
