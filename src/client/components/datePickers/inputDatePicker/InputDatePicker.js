import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const InputDatePicker = React.memo(({ selected, onChange, ...rest }) => {
  return <DatePicker selected={selected} onChange={onChange} {...rest} />;
});

InputDatePicker.propTypes = {
  selected: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputDatePicker;
