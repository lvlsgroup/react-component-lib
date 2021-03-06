import urlParse from 'url-parse';
import {
  getSortedObject,
  toggleArrayValue,
} from '@rc-lib-client/shared/utils/jsUtils/jsUtils';

export function getSearchParams(
  location,
  { removeParamsArray, addParamsObj } = {
    removeParamsArray: [],
    addParamsObj: {},
  }
) {
  const parsedLocationSearch = urlParse(location.search, true);

  const search = Object.assign({}, parsedLocationSearch.query, {
    ...addParamsObj,
  });

  removeParamsArray &&
    removeParamsArray.forEach((item) => {
      delete search[item];
    });

  const sortedSearch = getSortedObject(search);

  let searchParamsString = '';
  let index = 0;
  for (const [key, value] of Object.entries(sortedSearch)) {
    const paramDeliminator = index === 0 ? '?' : '&';
    searchParamsString += value ? `${paramDeliminator}${key}=${value}` : '';
    index++;
  }

  return searchParamsString;
}

export function getSearchQueryValue(search, queryName) {
  const parsedLocationSearch = urlParse(search, true);

  const queryString = parsedLocationSearch.query
    ? parsedLocationSearch.query[queryName]
    : '';
  return queryString;
}

export function getToggledSearchQuery(toggleValue, search, queryName) {
  const queryString = getSearchQueryValue(search, queryName);

  if (!queryString) {
    return toggleValue;
  } else {
    const toggledQueryArray = toggleArrayValue(
      queryString.split(','),
      toggleValue
    );

    return toggledQueryArray && toggledQueryArray.join(',');
  }
}

export function toggleSearchQuery(
  queryName,
  toggleValue,
  locationSearch,
  historyAction,
  historyState
) {
  const searchQueryValue = getToggledSearchQuery(
    toggleValue,
    locationSearch,
    queryName
  );

  let searchTest = {};
  if (searchQueryValue && searchQueryValue.length > 0) {
    searchTest = getSearchParams(location, {
      addParamsObj: { [queryName]: searchQueryValue },
    });
  } else {
    searchTest = getSearchParams(location, {
      removeParamsArray: [queryName],
    });
  }

  historyAction({
    search: searchTest,
    state: historyState,
  });
}

/* Same as toggleSearchQuery but more performant, doesnt sort url params. */
export function toggleSearchParam(searchParam, location, historyAction) {
  const deliminatorIndex = location.search.indexOf(searchParam) - 1;

  if (deliminatorIndex === -2) {
    const deliminator = location.search ? '&' : '?';
    const searchParamToAdd = deliminator + searchParam;

    historyAction({
      ...location,
      search: location.search + searchParamToAdd,
    });
  } else {
    const deliminator = location.search.substring(
      deliminatorIndex,
      deliminatorIndex + 1
    );
    const searchParamToRemove = deliminator + searchParam;

    historyAction({
      ...location,
      search: location.search.replace(searchParamToRemove, ''),
    });
  }
}

export function isHashNameInUrl(hashName, location) {
  return location.hash?.includes(hashName);
}

export function toggleUrlHash(hashName, location, historyAction) {
  const isHashInUrl = isHashNameInUrl(hashName, location);
  const hashString = isHashInUrl
    ? location.hash.replace(hashName, '')
    : location.hash + hashName;

  historyAction({
    ...location,
    hash: hashString,
  });
}
