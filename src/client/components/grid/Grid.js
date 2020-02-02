import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './grid.scss';

function Grid({ className, resColSystem, rowGap, colGap, children }) {
  let newRow = 0;

  const ie11Safe = children.map((slide, index) => {
    newRow = index % 4 === 0 ? ++newRow : newRow;

    return React.cloneElement(slide, {
      key: index,
      style: { msGridRow: newRow, msGridColumn: (index % 4) + 1 }, // Needed for IE11
    });
  });

  return (
    <div
      className={classNames(
        styles.grid,
        resColSystem && styles[resColSystem],
        className && className
      )}
      style={{ rowGap: rowGap, columnGap: colGap }}
    >
      {ie11Safe}
    </div>
  );
}

Grid.defaultProps = {
  resColSystem: 'res1234',
  rowGap: '0px',
  colGap: '0px',
};

Grid.propTypes = {
  className: PropTypes.string,
  resColSystem: PropTypes.string,
  colGap: PropTypes.string,
  rowGap: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default React.memo(Grid);
