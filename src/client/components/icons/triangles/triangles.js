import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import { DivOrButton } from '@rc-lib-client/shared/utils/dom/dom';
import styles from './triangles.scss';

function TriangleNarrow({
  className,
  onClick,
  degree = 0,
  fontSize,
  color = '#000000',
}) {
  return (
    <DivOrButton
      className={`${styles.triangleDownNarrow}${className ? className : ''}`}
      onClick={onClick}
      style={{
        fontSize: fontSize && fontSize,
        color: color,
        transform: `rotate(${degree}deg)`,
      }}
    />
  );
}

TriangleNarrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  degree: PropTypes.number,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

export { TriangleNarrow };
