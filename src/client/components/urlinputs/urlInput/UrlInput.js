import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import {
  getSearchParams,
  getSearchQueryValue,
} from '@rc-lib-client/shared/utils/urlUtils/urlUtils';
import Flex from '@rc-lib-client/components/flex/Flex';
import Input from '@rc-lib-client/components/inputs/input/Input';
import styles from './urlInput.scss';

function UrlInput({
  className,
  inputClassName,
  placeholder,
  searchParam,
  historyAction = 'push',
  historyState = { dontScrollToTop: true },
  hasDefaultClearIcon = true,
  alwaysShowClearIcon,
  inputType,
  inputSize = 'inputSizeMd',
  CustomClearIcon,
}) {
  const location = useLocation();
  const history = useHistory();
  const currentQuery = getSearchQueryValue(location.search, searchParam) || '';

  function onInputChange(event) {
    let searchParams;
    if (event.target.value) {
      searchParams = getSearchParams(location, {
        addParamsObj: { [searchParam]: event.target.value },
      });
    } else {
      searchParams = getSearchParams(location, {
        removeParamsArray: [searchParam],
      });
    }

    history[historyAction]({
      search: searchParams,
      state: historyState,
    });
  }

  function onClear() {
    const searchParams = getSearchParams(location, {
      removeParamsArray: [searchParam],
    });
    history[historyAction]({ search: searchParams, state: historyState });
  }

  return (
    <Flex className={classNames(styles.urlInput, className)}>
      <Input
        inputSize={inputSize}
        placeholder={placeholder}
        className={classNames(styles.input, inputClassName)}
        value={currentQuery}
        onChange={onInputChange}
        type={inputType}
      />
      {(alwaysShowClearIcon || currentQuery) && CustomClearIcon ? (
        <button className={styles.btnClear} type={'button'} onClick={onClear}>
          {CustomClearIcon}
        </button>
      ) : (
        (alwaysShowClearIcon || currentQuery) &&
        hasDefaultClearIcon && (
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
        )
      )}
    </Flex>
  );
}

UrlInput.propTypes = {
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  inputType: PropTypes.string,
  inputSize: PropTypes.string,
  placeholder: PropTypes.string,
  searchParam: PropTypes.string,
  historyAction: PropTypes.oneOf(['push', 'replace']),
  historyState: PropTypes.object,
  alwaysShowClearIcon: PropTypes.bool,
  hasDefaultClearIcon: PropTypes.bool,
  CustomClearIcon: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default React.memo(UrlInput);
