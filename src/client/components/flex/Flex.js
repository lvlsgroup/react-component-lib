import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './flex.scss';

const RES_COL_SYSTEM = [
  'col12s3030',
  'col12s2020',
  'col12s1010',
  'col12s1640',
  'col12s1424',
  'col12s1414',
];

function Flex({
  className,
  column,
  justifyCenter,
  alignCenter,
  spaceBetween,
  dontExpandChildren,
  flexNr,
  resColSystem,
  children,
}) {
  return (
    <div
      className={classNames(
        column ? styles.flexCol : styles.flexRow,
        justifyCenter && styles.justifyCenter,
        alignCenter && styles.alignCenter,
        dontExpandChildren && styles.dontExpandChildren,
        spaceBetween && styles.spaceBetween,
        resColSystem && styles[resColSystem],
        className && className
      )}
      style={flexNr && { flex: flexNr }}
    >
      {children}
    </div>
  );
}

Flex.propTypes = {
  className: PropTypes.string,
  column: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  alignCenter: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  resColSystem: PropTypes.oneOf(RES_COL_SYSTEM),
  flexNr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  dontExpandChildren: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default React.memo(Flex);
