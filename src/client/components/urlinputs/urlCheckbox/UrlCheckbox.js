import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getSearchQueryValue,
  toggleSearchQuery,
} from '@rc-lib-client/shared/utils/urlUtils/urlUtils';

/* Supports multiple values, so this can be used with multiple checkboxes. */

function UrlCheckbox({
  className,
  searchParam,
  value,
  historyAction = 'push',
  historyState = { dontScrollToTop: true },
}) {
  const location = useLocation();
  const history = useHistory();

  function getValue() {
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
    <input
      className={className ? className : ''}
      type={'checkbox'}
      onChange={onChange}
      checked={getValue()}
    />
  );
}

UrlCheckbox.propTypes = {
  className: PropTypes.string,
  searchParam: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  historyAction: PropTypes.string,
  historyState: PropTypes.object,
};

export default React.memo(UrlCheckbox);
