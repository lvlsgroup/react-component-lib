import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './flex.scss';

// TODO: Break this out and create FlexResponsive component with help of designers.
const RES_COL_SYSTEM = [
  'col12s3030',
  'col12s2020',
  'col12s1010',
  'col12s1640',
  'col12s1424',
  'col12s1414',
  'col222s1616',
  'col12_s1616',
  'col12_s88',
  'col12_s2424',
];

function Flex({
  className,
  column,
  justifyCenter,
  alignCenter,
  alignItemsBaseline,
  spaceBetween,
  dontExpandChildren,
  flexNr,
  resClassNameContainer,
  resColSystem,
  children,
}) {
  const classes = classNames(
    column ? styles.flexCol : styles.flexRow,
    justifyCenter && styles.justifyCenter,
    alignCenter && styles.alignCenter,
    dontExpandChildren && styles.dontExpandChildren,
    spaceBetween && styles.spaceBetween,
    alignItemsBaseline && styles.alignItemsBaseline,
    resColSystem && styles[resColSystem],
    className && className
  );
  const style = { flex: flexNr && `${flexNr}` };

  if (resColSystem) {
    // When using a responsive layout we need to wrap the flex grid in a div so we can pass in margin-top without destroying the flexgrid margin
    return (
      <div
        className={classNames(styles.flexContainer, resClassNameContainer)}
        style={style}
      >
        <div className={classes}>{children}</div>
      </div>
    );
  } else {
    return (
      <div className={classes} style={style}>
        {children}
      </div>
    );
  }
}

Flex.propTypes = {
  className: PropTypes.string,
  column: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignItemsBaseline: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  resClassNameContainer: PropTypes.string,
  resColSystem: PropTypes.oneOf(RES_COL_SYSTEM),
  flexNr: PropTypes.number,
  style: PropTypes.object,
  dontExpandChildren: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default React.memo(Flex);
