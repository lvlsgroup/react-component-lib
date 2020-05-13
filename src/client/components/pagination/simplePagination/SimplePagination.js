import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './simplePagination.scss';

export default class SimplePagination extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handlePaginationBtnClick = (index) => {
    if (index > 0 && index <= this.props.pageCount) {
      this.props.onPaginationBtnClick(index);
    }
  };

  getFirstIndexInRange = (current, pagesPerSide, safeRange, numberOfPages) => {
    const isFirstRange = current - pagesPerSide < 1;
    const isLastRange = current + pagesPerSide > numberOfPages;

    if (isFirstRange) {
      return 1;
    } else if (isLastRange) {
      return numberOfPages - (safeRange - 1);
    } else {
      return current - pagesPerSide;
    }
  };

  render() {
    const {
      className,
      classNamePaginationButton,
      pageCount,
      currentPage,
      iconNextPageButton,
      iconLastPageButton,
      numberOfPagesToShow,
    } = this.props;

    const numberOfPagesOnEachSideOfCurrentPage =
      numberOfPagesToShow && numberOfPagesToShow > 1
        ? (numberOfPagesToShow - 1) / 2
        : 0;

    const safePageCount = pageCount ? pageCount : 1;
    const safeRangeOfPages =
      safePageCount < numberOfPagesToShow ? safePageCount : numberOfPagesToShow;

    const firstIndexInRange = this.getFirstIndexInRange(
      currentPage,
      numberOfPagesOnEachSideOfCurrentPage,
      safeRangeOfPages,
      safePageCount
    );

    const isLastPage = currentPage === safePageCount;
    const isFirstPage = currentPage === 1;

    return (
      <div
        className={`${styles.simplePagination}${
          className ? ` ${className}` : ''
        }`}
      >
        <PaginationGroupLeft
          isDisabled={isFirstPage}
          previousPage={currentPage - 1}
          handlePaginationBtnClick={this.handlePaginationBtnClick}
          startIndex={1}
          showGoToStartButton={false}
          iconFirstPageButton={iconLastPageButton}
          iconPreviousPageButton={iconNextPageButton}
          classNamePaginationButton={classNamePaginationButton}
        />
        {Array(safeRangeOfPages)
          .fill()
          .map((_, index) => {
            const signedIndex = index + firstIndexInRange;
            return (
              <PaginationButton
                key={`paginationBtn:${index}`}
                index={signedIndex}
                className={className(
                  styles.paginationButton,
                  classNamePaginationButton
                )}
                onClick={this.handlePaginationBtnClick}
                isSelected={currentPage === signedIndex}
              >
                {signedIndex}
              </PaginationButton>
            );
          })}
        <PaginationGroupRight
          handlePaginationBtnClick={this.handlePaginationBtnClick}
          isDisabled={isLastPage}
          nextPage={currentPage + 1}
          lastIndex={safePageCount}
          showGoToEndButton={false}
          iconNextPageButton={iconNextPageButton}
          iconLastPageButton={iconLastPageButton}
          classNamePaginationButton={classNamePaginationButton}
        />
      </div>
    );
  }
}

SimplePagination.propTypes = {
  className: PropTypes.string,
  classNamePaginationButton: PropTypes.string,
  pageCount: PropTypes.number,
  currentPage: PropTypes.number,
  onPaginationBtnClick: PropTypes.func,
  numberOfPagesToShow: PropTypes.number,
};

function PaginationGroupLeft({
  handlePaginationBtnClick,
  isDisabled,
  previousPage,
  startIndex,
  showGoToStartButton = true,
  iconPreviousPageButton = '❮',
  iconFirstPageButton = '❮❮',
  classNamePaginationButton,
}) {
  return (
    <>
      {showGoToStartButton && (
        <PaginationButton
          className={classNames(
            styles.paginationButton,
            classNamePaginationButton
          )}
          onClick={handlePaginationBtnClick}
          index={startIndex}
          isDisabled={isDisabled}
        >
          {iconFirstPageButton}
        </PaginationButton>
      )}
      <PaginationButton
        className={classNames(
          styles.paginationButton,
          classNamePaginationButton
        )}
        onClick={handlePaginationBtnClick}
        index={previousPage}
        isDisabled={isDisabled}
      >
        {iconPreviousPageButton}
      </PaginationButton>
    </>
  );
}

function PaginationGroupRight({
  handlePaginationBtnClick,
  isDisabled,
  showGoToEndButton = true,
  nextPage,
  lastIndex,
  iconNextPageButton = '❯',
  iconLastPageButton = '❯❯',
  classNamePaginationButton,
}) {
  return (
    <>
      <PaginationButton
        className={classNames(
          styles.paginationButton,
          classNamePaginationButton
        )}
        onClick={handlePaginationBtnClick}
        index={nextPage}
        isDisabled={isDisabled}
      >
        {iconNextPageButton}
      </PaginationButton>
      {showGoToEndButton && (
        <PaginationButton
          className={classNames(
            styles.paginationButton,
            classNamePaginationButton
          )}
          onClick={handlePaginationBtnClick}
          index={lastIndex}
          isDisabled={isDisabled}
        >
          {iconLastPageButton}
        </PaginationButton>
      )}
    </>
  );
}

function PaginationButton({
  className,
  onClick,
  index,
  isSelected,
  isDisabled,
  children,
}) {
  function getClassNames() {
    return classNames({
      [styles.paginationButton]: true,
      [styles.isSelected]: isSelected,
      [className]: !!className,
    });
  }

  function handleBtnClick() {
    onClick(index);
  }

  return (
    <button
      className={getClassNames()}
      onClick={handleBtnClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
