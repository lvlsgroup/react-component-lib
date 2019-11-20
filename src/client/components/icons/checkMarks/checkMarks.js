import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import { DivOrButton } from '@rc-lib-client/shared/utils/dom/dom';
import styles from './checkMarks.scss';

function CheckmarkFatUtf({ className, onClick, fontSize, color = '#000000' }) {
  return (
    <DivOrButton
      className={`${styles.checkMarkFatUtf}${className ? className : ''}`}
      onClick={onClick}
      style={{
        fontSize: fontSize && fontSize,
        color: color,
      }}
    />
  );
}

CheckmarkFatUtf.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

export { CheckmarkFatUtf };
