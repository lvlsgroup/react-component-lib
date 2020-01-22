import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useOutsideClickListener from '@rc-lib-client/helperComponents/hooks/useOutsideClickListener';
import styles from './dropdownTrigger.scss';

function DropdownTrigger({
  className,
  TriggerElement,
  triggerPropKey,
  shouldTriggerReceiveState,
  DropdownContent,
  dropdownClassName,
}) {
  const [isDropdownOpen, setIsOpen] = useState(false);
  const buttonWithDropdownRef = useRef();

  useOutsideClickListener(
    buttonWithDropdownRef,
    isDropdownOpen,
    toggleDropdown
  );

  function toggleDropdown() {
    setIsOpen(!isDropdownOpen);
  }

  return (
    <div
      ref={buttonWithDropdownRef}
      className={classNames(styles.dropdownTrigger, className)}
    >
      <Trigger
        TriggerElement={TriggerElement}
        triggerPropKey={triggerPropKey}
        onClick={toggleDropdown}
        isTriggerOpen={isDropdownOpen}
        shouldTriggerReceiveState={shouldTriggerReceiveState}
      />
      {isDropdownOpen && (
        <Dropdown
          DropdownContent={DropdownContent}
          dropdownClassName={dropdownClassName}
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
        />
      )}
    </div>
  );
}

DropdownTrigger.defaultProps = {
  triggerPropKey: 'onClick',
};

DropdownTrigger.propTypes = {
  className: PropTypes.string,
  TriggerElement: PropTypes.any,
  triggerPropKey: PropTypes.string, // For input elements we might want to trigger at onFocus or onBlur
  shouldTriggerReceiveState: PropTypes.bool, // If you need to style Trigger depending on state.
  DropdownContent: PropTypes.any,
  dropdownClassName: PropTypes.string,
};

export default React.memo(DropdownTrigger);

const Trigger = React.memo(
  ({
    TriggerElement,
    triggerPropKey,
    shouldTriggerReceiveState,
    isTriggerOpen,
    onClick,
  }) => {
    return (
      <>
        {React.cloneElement(TriggerElement, {
          [triggerPropKey]: onClick,
          ...(shouldTriggerReceiveState && {
            isTriggerOpen: isTriggerOpen,
          }),
        })}
      </>
    );
  }
);

const Dropdown = React.memo(
  ({ DropdownContent, dropdownClassName, toggleDropdown, isDropdownOpen }) => {
    return (
      <div
        className={classNames(
          styles.clickOutsideWrapper,
          styles.dropdown,
          dropdownClassName
        )}
      >
        {React.cloneElement(DropdownContent, {
          toggleDropdown,
          isDropdownOpen,
        })}
      </div>
    );
  }
);
