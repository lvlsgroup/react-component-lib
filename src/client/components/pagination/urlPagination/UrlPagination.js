import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import {
  getSearchParams,
  getSearchQueryValue,
} from '@rc-lib-client/shared/utils/urlUtils/urlUtils';
import SimplePagination from '@rc-lib-client/components/pagination/simplePagination/SimplePagination';

function UrlPagination({
  className,
  pageCount,
  numberOfPagesToShow = 7,
  scrollIntoViewRef,
  iconNextPageButton,
  iconLastPageButton,
}) {
  let history = useHistory();
  const location = useLocation();

  const numberOfPagesToShowForcedToOddNumber =
    numberOfPagesToShow % 2 ? numberOfPagesToShow : numberOfPagesToShow + 1;

  function onPaginationBtnClick(index) {
    const searchTest = getSearchParams(location, {
      addParamsObj: { page: index },
    });

    history.push({
      search: searchTest,
      scrollIntoViewRef: scrollIntoViewRef,
    });
  }
  const currentPage = getSearchQueryValue(location.search, 'page');

  return (
    <div className={`${className ? ` ${className}` : ''}`}>
      <SimplePagination
        pageCount={pageCount}
        currentPage={parseInt(currentPage || 1)}
        onPaginationBtnClick={onPaginationBtnClick}
        numberOfPagesToShow={numberOfPagesToShowForcedToOddNumber}
        iconLastPageButton={iconLastPageButton}
        iconNextPageButton={iconNextPageButton}
      />
    </div>
  );
}

UrlPagination.propTypes = {
  className: PropTypes.string,
  pageCount: PropTypes.number,
  location: PropTypes.object,
  onPaginationBtnClick: PropTypes.func,
  numberOfPagesToShow: PropTypes.number,
  scrollIntoViewRef: PropTypes,
};

export default UrlPagination;
