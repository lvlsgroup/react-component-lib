import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './dropdownSelector.scss';

const DropdownSelector = React.memo(
  ({
    instanceId,
    className,
    selected,
    onChange,
    options,
    isMulti,
    remapValueKey,
    remapLabelKey,
    ...rest
  }) => {
    return (
      <Select
        instanceId={instanceId}
        className={classNames(className, styles.dropdownSelector)}
        classNamePrefix={'dropdown_selector_inner'}
        getOptionValue={remapValueKey && ((option) => option[remapValueKey])}
        getOptionLabel={remapLabelKey && ((option) => option[remapLabelKey])}
        value={selected}
        options={options}
        isMulti={isMulti}
        onChange={onChange}
        {...rest}
      />
    );
  }
);

DropdownSelector.propTypes = {
  className: PropTypes.string,
  instanceId: PropTypes.string,
  remapValueKey: PropTypes.string,
  remapLabelKey: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  options: PropTypes.array,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
};

export default DropdownSelector;
