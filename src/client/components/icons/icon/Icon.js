import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Icon({ buttonClassName, onClick, iconClassName }) {
  return onClick ? (
    <button className={classNames(buttonClassName)} onClick={onClick}>
      <i className={classNames(iconClassName)} />
    </button>
  ) : (
    <i className={classNames(iconClassName)} />
  );
}

Icon.propTypes = {
  iconClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(Icon);
