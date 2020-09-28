import React, { useEffect } from 'react';
import classNames from 'classnames';
import { toggleFixedBody } from '@rc-lib-client/shared/utils/dom/dom';
import styles from './modalUtils.scss';

export const ModalFixedCentered = React.memo(
  ({
    ModalContent,
    modalClassName,
    toggleModal,
    isModalOpen,
    stopBackgroundScroll,
  }) => {
    const onMountAndUnMount = () => {
      if (stopBackgroundScroll && isModalOpen) {
        toggleFixedBody();
      }

      const closeOnEscapeKey = (e) => {
        if (e.keyCode === 27) {
          toggleModal();
        }
      };

      window.addEventListener('keyup', closeOnEscapeKey, false);

      return () => {
        if (stopBackgroundScroll && isModalOpen) {
          toggleFixedBody();
        }
        window.removeEventListener('keyup', closeOnEscapeKey, false);
      };
    };

    useEffect(onMountAndUnMount, []);

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

export const OverLay = React.memo(({ overlayClassName, onClick }) => {
  return (
    <div
      className={classNames(styles.overLay, overlayClassName)}
      onClick={onClick}
    />
  );
});

export const Trigger = React.memo(
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
