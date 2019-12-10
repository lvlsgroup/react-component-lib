import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ToggleArrowSvg = ({ className, color, onToggle }) => {
  const path1 = !onToggle ? 'M 1 1 L 6 6' : 'M 1 6 L 6 1';
  const path2 = !onToggle ? 'M 11 1 L 6 6' : 'M 11 6 L 6 1';

  return (
    <svg className={classNames(className)} height="7" width="12">
      <path
        d={path1}
        stroke={color || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={path2}
        stroke={color || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

ToggleArrowSvg.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

export default ToggleArrowSvg;
