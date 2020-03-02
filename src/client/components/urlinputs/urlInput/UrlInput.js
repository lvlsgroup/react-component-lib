import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import {
  getSearchParams,
  getSearchQueryValue,
} from '@rc-lib-client/shared/utils/urlUtils/urlUtils';
import Flex from '@rc-lib-client/components/flex/Flex';
import styles from './urlInput.scss';

function UrlInput({ className, placeholder, searchParam }) {
  const location = useLocation();
  const history = useHistory();
  const currentQuery = getSearchQueryValue(location.search, searchParam) || '';

  function onInputChange(event) {
    let searchParams;
    if (event.target.value) {
      searchParams = getSearchParams(location, {
        addParamsObj: { query: event.target.value },
      });
    } else {
      searchParams = getSearchParams(location, {
        removeParamsArray: [searchParam],
      });
    }

    history.push({ search: searchParams, state: { dontScrollToTop: true } });
  }

  function onClear() {
    const searchParams = getSearchParams(location, {
      removeParamsArray: [searchParam],
    });
    history.push({ search: searchParams, state: { dontScrollToTop: true } });
  }

  return (
    <Flex className={classNames(styles.urlInput, className)} alignCenter>
      <input
        placeholder={placeholder}
        className={styles.input}
        value={currentQuery}
        onChange={onInputChange}
      />
      {currentQuery && (
        <button className={styles.btnClear} type={'button'} onClick={onClear}>
          <svg
            className={styles.crossIcon}
            height="30"
            width="30"
            viewBox="0 0 30 30"
          >
            <path
              className={styles.cross1}
              d={'M 2 15 L 28 15'}
              strokeWidth={'3'}
            />
            <path
              className={styles.cross2}
              d={'M 2 15 L 28 15'}
              strokeWidth={'3'}
            />
          </svg>
        </button>
      )}
    </Flex>
  );
}

URLInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  searchParam: PropTypes.string,
};

export default React.memo(UrlInput);
