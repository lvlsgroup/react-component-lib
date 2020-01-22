import React from 'react';
import PropTypes from 'prop-types';
import { DivOrButton } from '@rc-lib-client/shared/utils/dom/dom';
import styles from './crossIcon.scss';

const CrossIcon = React.memo(({ onClick, crossColor, style }) => {
  return (
    <DivOrButton
      className={`${styles.crossIcon} ${styles[crossColor]}`}
      onClick={onClick}
      style={style}
    />
  );
});

CrossIcon.propTypes = {
  onClick: PropTypes.func,
  crossColor: PropTypes.string,
  style: PropTypes.object,
};

export default CrossIcon;
