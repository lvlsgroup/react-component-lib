import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import {
  getSearchParams,
  getSearchQueryValue,
} from '@rc-lib-client/shared/utils/urlUtils/urlUtils';
import DropdownSelector from '@rc-lib-client/components/selectors/dropdownSelector/DropdownSelector';

/*
  Does not support multiple values for now
  Options is an array of objects with 'value' and 'label' as keys... [ { value: 'xyz', label: 'X Y Z' } ]
 */

function UrlSelect({
  className,
  searchParam,
  options,
  indexOfDefaultValue = 0,
  historyAction = 'push',
  historyState = { dontScrollToTop: true },
}) {
  const history = useHistory();
  const location = useLocation();

  const valueInUrl = getSearchQueryValue(location.search, searchParam);
  const indexOfSelectedValue = options?.findIndex((entry) => {
    return entry.value === valueInUrl;
  });

  function onChange(selected) {
    let searchValue;
    if (
      selected.value &&
      selected.value !== options[indexOfDefaultValue].value
    ) {
      searchValue = getSearchParams(location, {
        addParamsObj: { [searchParam]: selected.value },
      });
    } else {
      searchValue = getSearchParams(location, {
        removeParamsArray: [searchParam],
      });
    }

    history[historyAction]({
      search: searchValue,
      state: historyState,
    });
  }

  return (
    <DropdownSelector
      className={className ? className : ''}
      selected={options[indexOfSelectedValue] || options[indexOfDefaultValue]}
      instanceId={searchParam}
      options={options}
      onChange={onChange}
    />
  );
}

UrlSelect.propTypes = {
  className: PropTypes.string,
  searchParam: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  indexOfDefaultValue: PropTypes.number,
  historyAction: PropTypes.string,
  historyState: PropTypes.object,
};

export default React.memo(UrlSelect);
