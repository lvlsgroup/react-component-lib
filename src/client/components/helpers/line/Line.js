import React from 'react';
import PropTypes from 'prop-types';

function Line({ className, height, backgroundColor }) {
  return (
    <hr
      className={className}
      style={{
        border: 'none',
        backgroundColor: backgroundColor,
        height: height,
      }}
    />
  );
}

Line.defaultProps = {
  height: '1px',
  backgroundColor: '#000000',
};

Line.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default React.memo(Line);
