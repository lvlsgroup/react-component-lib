import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './flex.scss';

function Flex({
  className,
  column,
  justifyCenter,
  alignCenter,
  spaceBetween,
  dontExpandChildren,
  flexNr,
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
  flexNr: PropTypes.number,
  style: PropTypes.object,
  dontExpandChildren: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default React.memo(Flex);
