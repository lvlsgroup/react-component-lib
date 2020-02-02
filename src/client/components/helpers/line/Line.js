import React from 'react';
import PropTypes from 'prop-types';

function Line({ className, height, backgroundColor }) {
  return (
    <hr
      className={className}
      style={{
        backgroundColor: backgroundColor,
        height: height,
      }}
    />
  );
}

Line.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default React.memo(Line);
