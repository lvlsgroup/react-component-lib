import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './InputDatePicker.scss';

function InputDatePicker({
  className,
  dayClassName,
  weekDayClassName,
  monthClassName,
  timeClassName,
  selected,
  onChange,
  dateFormat,
  placeholderText,
  popperModifiers,
  disabled,
  selectsStart,
  selectsEnd,
  highlightDates,
  startDate,
  endDate,
  minDate,
  maxDate,
  SlotBottom,
  onlyFirstLetterDayName,
  noBorderPopper,
  hideTopTriangleClipPath,
  ...rest
}) {
  const defaultPopperModifiers = {
    preventOverflow: {
      enabled: true,
      boundariesElement: 'viewport',
    },
  };
  const popperModifiersWithDefaults = {
    ...defaultPopperModifiers,
    ...popperModifiers,
  };

  return (
    <DatePicker
      className={className}
      dayClassName={dayClassName}
      weekDayClassName={weekDayClassName}
      monthClassName={monthClassName}
      timeClassName={timeClassName}
      popperClassName={classNames(
        styles.popperClassNameProp,
        onlyFirstLetterDayName && styles.onlyFirstLetterDayName,
        noBorderPopper && styles.noBorderPopper,
        hideTopTriangleClipPath && styles.hideTopTriangleClipPath
      )}
      selected={selected}
      onChange={onChange}
      dateFormat={dateFormat}
      placeholderText={placeholderText}
      disabled={disabled}
      selectsStart={selectsStart}
      selectsEnd={selectsEnd}
      highlightDates={highlightDates}
      startDate={startDate}
      endDate={endDate}
      minDate={minDate}
      maxDate={maxDate}
      popperModifiers={popperModifiersWithDefaults}
      {...rest}
    >
      {SlotBottom}
    </DatePicker>
  );
}

InputDatePicker.propTypes = {
  className: PropTypes.string,
  dayClassName: PropTypes.func,
  weekDayClassName: PropTypes.func,
  monthClassName: PropTypes.func,
  timeClassName: PropTypes.func,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  dateFormat: PropTypes.string,
  placeholderText: PropTypes.string,
  popperModifiers: PropTypes.object,
  disabled: PropTypes.bool,
  selectsStart: PropTypes.bool,
  selectsEnd: PropTypes.bool,
  highlightDates: PropTypes.arrayOf(PropTypes.object),
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  SlotBottom: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onlyFirstLetterDayName: PropTypes.bool,
  noBorderPopper: PropTypes.bool,
  hideTopTriangleClipPath: PropTypes.bool,
};

export default React.memo(InputDatePicker);
