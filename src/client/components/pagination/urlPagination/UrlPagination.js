import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '@rc-lib-client/components/pagination/urlPagination/urlPagination.scss';
import {
  getSearchParams,
  getSearchQueryValue,
} from '@rc-lib-client/shared/utils/urlUtils/urlUtils';
import { getFirstIndexInRange } from '@rc-lib-client/components/pagination/urlPagination/utils';
import Flex from '@rc-lib-client/components/flex/Flex';

function UrlPagination({
  className,
  classNamePaginationButton,
  classNameSelected,
  classNameFirstLastButtons,
  classNamePreviousNextButtons,
  pageCount,
  numberOfPagesToShow = 5,
  showEndOfRangeButtons = true,
  dontScrollToTop,
  slotFirst = '❮❮',
  slotPrevious = '❮',
  slotNext = '❯',
  slotLast = '❯❯',
}) {
  let history = useHistory();
  const location = useLocation();

  const parsedCurrentPage = getSearchQueryValue(location.search, 'page') || 1;
  const currentPage = parseInt(parsedCurrentPage);
  const safePageCount = pageCount ? pageCount : 1;
  const isLastPage = currentPage === safePageCount;
  const isFirstPage = currentPage === 1;

  const numberOfPagesOnEachSideOfCurrentPage =
    numberOfPagesToShow > 1 ? (numberOfPagesToShow - 1) / 2 : 0;

  const safeRangeOfPages =
    safePageCount < numberOfPagesToShow ? safePageCount : numberOfPagesToShow;

  const firstIndexInRange = getFirstIndexInRange(
    currentPage,
    numberOfPagesOnEachSideOfCurrentPage,
    safeRangeOfPages,
    safePageCount
  );

  function onPaginationBtnClick(value) {
    if (value >= 1 && value <= safePageCount) {
      const searchTest = getSearchParams(location, {
        addParamsObj: { page: value },
      });

      history.push({
        search: searchTest,
        state: { dontScrollToTop: dontScrollToTop },
      });
    }
  }

  return (
    <Flex justifyCenter className={classNames(className)}>
      {showEndOfRangeButtons && (
        <PaginationButton
          className={classNames(
            classNamePaginationButton,
            classNameFirstLastButtons
          )}
          isDisabled={isFirstPage}
          onClick={onPaginationBtnClick}
          value={1}
        >
          {slotFirst}
        </PaginationButton>
      )}
      <PaginationButton
        className={classNames(
          classNamePaginationButton,
          classNamePreviousNextButtons
        )}
        isDisabled={isFirstPage}
        onClick={onPaginationBtnClick}
        value={currentPage - 1}
      >
        {slotPrevious}
      </PaginationButton>
      {Array(safeRangeOfPages)
        .fill()
        .map((_, index) => {
          const signedIndex = index + firstIndexInRange;
          return (
            <PaginationButton
              key={`page:${signedIndex}`}
              className={classNamePaginationButton}
              value={signedIndex}
              onClick={onPaginationBtnClick}
              isSelected={currentPage === signedIndex}
              classNameSelected={classNameSelected}
            >
              {signedIndex}
            </PaginationButton>
          );
        })}
      <PaginationButton
        className={classNames(
          classNamePaginationButton,
          classNamePreviousNextButtons
        )}
        isDisabled={isLastPage}
        onClick={onPaginationBtnClick}
        value={currentPage + 1}
      >
        {slotNext}
      </PaginationButton>
      {showEndOfRangeButtons && (
        <PaginationButton
          className={classNames(
            classNamePaginationButton,
            classNameFirstLastButtons
          )}
          isDisabled={isLastPage}
          onClick={onPaginationBtnClick}
          value={safePageCount}
        >
          {slotLast}
        </PaginationButton>
      )}
    </Flex>
  );
}

UrlPagination.propTypes = {
  className: PropTypes.string,
  classNameSelected: PropTypes.string,
  classNamePaginationButton: PropTypes.string,
  classNameFirstLastButtons: PropTypes.string,
  classNamePreviousNextButtons: PropTypes.string,
  pageCount: PropTypes.number,
  onPaginationBtnClick: PropTypes.func,
  numberOfPagesToShow: PropTypes.number,
  showEndOfRangeButtons: PropTypes.bool,
  dontScrollToTop: PropTypes.bool,
  slotFirst: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  slotPrevious: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  slotNext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  slotLast: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default UrlPagination;

function PaginationButton({
  className,
  classNameSelected,
  onClick,
  value,
  isSelected,
  isDisabled,
  children,
}) {
  function getClassNames() {
    return classNames({
      [styles.paginationButton]: true,
      [styles.isSelected]: isSelected,
      [classNameSelected]: isSelected,
      [className]: !!className,
    });
  }

  function handleBtnClick(event) {
    onClick(event.target.value);
  }

  return (
    <button
      className={getClassNames()}
      onClick={handleBtnClick}
      disabled={isDisabled}
      value={value}
    >
      {children}
    </button>
  );
}
