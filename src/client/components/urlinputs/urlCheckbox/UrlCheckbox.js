import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getSearchQueryValue,
  toggleSearchQuery,
} from '@rc-lib-client/shared/utils/urlUtils/urlUtils';
import Checkbox from '@rc-lib-client/components/inputs/checkbox/Checkbox';

/* Supports multiple values, so this can be used with multiple checkboxes. */

function UrlCheckbox({
  className,
  searchParam,
  value,
  historyAction = 'push',
  historyState = { dontScrollToTop: true },
  name,
  isDisabled,
  leftLabel,
  rightLabel,
  labelClassName,
  checkerClassName,
  containerClassName,
  style,
}) {
  const location = useLocation();
  const history = useHistory();

  function isChecked() {
    const valuesAsString = getSearchQueryValue(location.search, searchParam);
    const valuesAsArray = valuesAsString?.split(',');
    return valuesAsArray?.includes(value) ?? false;
  }

  function onChange() {
    toggleSearchQuery(
      searchParam,
      value,
      location.search,
      history[historyAction],
      historyState
    );
  }

  return (
    <Checkbox
      className={className ? className : ''}
      checkerClassName={checkerClassName}
      containerClassName={containerClassName}
      name={name}
      style={style}
      onChange={onChange}
      isChecked={isChecked()}
      labelClassName={labelClassName}
      rightLabel={rightLabel}
      leftLabel={leftLabel}
      isDisabled={isDisabled}
    />
  );
}

UrlCheckbox.propTypes = {
  className: PropTypes.string,
  checkerClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  searchParam: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  historyAction: PropTypes.oneOf(['push', 'replace']),
  historyState: PropTypes.object,
  style: PropTypes.object,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelClassName: PropTypes.string,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isDisabled: PropTypes.bool,
};

export default React.memo(UrlCheckbox);
