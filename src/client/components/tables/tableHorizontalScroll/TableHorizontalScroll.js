import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './tableHorizontalScroll.scss';

function TableHorizontalScroll({
  className,
  tableClassName,
  sizeUnit = 'px',
  colAttributes,
  TableHead,
  children,
}) {
  const tableWidth = colAttributes.reduce((accum, attributes) => {
    return accum + attributes?.width;
  }, 0);

  return (
    <div className={classNames(styles.tableVerticalScroll, className)}>
      <table
        style={{ width: tableWidth && tableWidth + sizeUnit }}
        className={classNames(styles.table, tableClassName)}
      >
        <colgroup>
          {colAttributes.map((attributes, index) => {
            const { width, ...rest } = attributes;

            return (
              <col key={index} style={{ width: width + sizeUnit }} {...rest} />
            );
          })}
        </colgroup>
        {TableHead && <TableHead />}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

TableHorizontalScroll.propTypes = {
  className: PropTypes.string,
  tableClassName: PropTypes.string,
  sizeUnit: PropTypes.string,
  colAttributes: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number.isRequired,
      span: PropTypes.string,
      className: PropTypes.string,
    })
  ),
  TableHead: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default TableHorizontalScroll;
