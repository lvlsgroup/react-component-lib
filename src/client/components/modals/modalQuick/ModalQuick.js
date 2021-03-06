import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ModalFixedCentered,
  OverLay,
  Trigger,
} from '@rc-lib-client/components/modals/modalFixedCentered/modalUtils';

// ModalQuickUrl give better UX. Keep this for support of our old sites and if you cannot have params in the URL.
function ModalQuick({
  overlayClassName,
  stopBackgroundScroll = true,
  modalClassName,
  TriggerElement,
  triggerPropKey,
  shouldTriggerReceiveState,
  ModalContent,
}) {
  const [isModalOpen, setIsOpen] = useState(false);

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
        <ModalFixedCentered
          ModalContent={ModalContent}
          modalClassName={modalClassName}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
          stopBackgroundScroll={stopBackgroundScroll}
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
  stopBackgroundScroll: PropTypes.bool,
  modalClassName: PropTypes.string,
  triggerPropKey: PropTypes.string, // For input elements we might want to trigger at onFocus or onBlur
  shouldTriggerReceiveState: PropTypes.bool, // If you need to style Trigger depending on state.
  TriggerElement: PropTypes.any,
  ModalContent: PropTypes.any,
};

export default React.memo(ModalQuick);
