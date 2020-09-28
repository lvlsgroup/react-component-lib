import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DivOrButton } from '@rc-lib-client/shared/utils/dom/dom';
import styles from './crossIcon.scss';

const CrossIcon = ({
  className,
  onClick,
  crossColor,
  style,
  lgCross,
  mdCross,
  expandXonHover = true,
}) => {
  return (
    <DivOrButton
      className={classNames(
        className,
        styles.crossIcon,
        styles[crossColor],
        lgCross && styles.lgCross,
        mdCross && styles.mdCross,
        expandXonHover && styles.expandCrossOnHover
      )}
      onClick={onClick}
      style={style}
    />
  );
};

CrossIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  crossColor: PropTypes.string,
  style: PropTypes.object,
  lgCross: PropTypes.bool,
  mdCross: PropTypes.bool,
  expandXonHover: PropTypes.bool,
};

export default React.memo(CrossIcon);
