import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './modalTrigger.scss';

function ModalQuick({
  overlayClassName,
  modalClassName,
  TriggerElement,
  triggerPropKey,
  shouldTriggerReceiveState,
  ModalContent,
}) {
  const [isModalOpen, setIsOpen] = useState(false);

  const onMountAndUnMount = () => {
    const closeOnEscapeKey = (e) => {
      if (e.keyCode === 27) {
        toggleModal();
      }
    };

    window.addEventListener('keyup', closeOnEscapeKey, false);

    return () => {
      window.removeEventListener('keyup', closeOnEscapeKey, false);
    };
  };

  useEffect(onMountAndUnMount, []);

  function toggleModal() {
    setIsOpen(!isModalOpen);
  }

  return (
    <>
      {isModalOpen && (
        <OverLay overlayClassName={overlayClassName} onClick={toggleModal} />
      )}
      {TriggerElement && (
        <Trigger
          TriggerElement={TriggerElement}
          triggerPropKey={triggerPropKey}
          onClick={toggleModal}
          isTriggerOpen={isModalOpen}
          shouldTriggerReceiveState={shouldTriggerReceiveState}
        />
      )}
      {isModalOpen && (
        <Modal
          ModalContent={ModalContent}
          modalClassName={modalClassName}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
}

ModalQuick.defaultProps = {
  triggerPropKey: 'onClick',
};

ModalQuick.propTypes = {
  overlayClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  triggerPropKey: PropTypes.string, // For input elements we might want to trigger at onFocus or onBlur
  shouldTriggerReceiveState: PropTypes.bool, // If you need to style Trigger depending on state.
  TriggerElement: PropTypes.any,
  ModalContent: PropTypes.any,
};

export default React.memo(ModalQuick);

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

const OverLay = React.memo(({ overlayClassName, onClick }) => {
  return (
    <div
      className={classNames(styles.overLay, overlayClassName)}
      onClick={onClick}
    />
  );
});

const Modal = React.memo(
  ({ ModalContent, modalClassName, toggleModal, isModalOpen }) => {
    const isDiv = ModalContent && ModalContent.type === 'div';

    return (
      <div className={classNames(styles.modal, modalClassName)}>
        {React.cloneElement(
          ModalContent,
          !isDiv && { toggleModal, isModalOpen }
        )}
      </div>
    );
  }
);
