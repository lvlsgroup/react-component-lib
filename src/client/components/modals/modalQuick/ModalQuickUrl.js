import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { toggleSearchParam } from '@rc-lib-client/shared/utils/urlUtils/urlUtils';
import {
  ModalFixedCentered,
  OverLay,
  Trigger,
} from '@rc-lib-client/components/modals/modalFixedCentered/modalUtils';

/* Use this instead of ModalQuick if you want the modal to close on back button or
  if you want to link to a specific page and have the modal open.
  Gives a bit better UX, especially on Android phones since its possible to close a modal when pressing back btn */
function ModalQuickUrl({
  overlayClassName,
  stopBackgroundScroll = true,
  urlSearchParamKey = 'modal_open',
  urlSearchParamValue = 'true',
  modalClassName,
  TriggerElement,
  triggerPropKey,
  shouldTriggerReceiveState,
  ModalContent,
}) {
  const history = urlSearchParamKey && useHistory();
  const location = urlSearchParamKey && useLocation();

  const searchParamKeyValue = `${urlSearchParamKey}=${urlSearchParamValue}`;
  const isModalOpen = location.search.includes(searchParamKeyValue);

  function toggleModal() {
    if (isModalOpen) {
      history.goBack();
    } else {
      toggleSearchParam(searchParamKeyValue, location, history.push);
    }
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

ModalQuickUrl.defaultProps = {
  triggerPropKey: 'onClick',
};

ModalQuickUrl.propTypes = {
  urlSearchParamKey: PropTypes.string.isRequired, // This needs to be unique if more than one component uses this component, ie, in a list (use id or index as a name than)
  urlSearchParamValue: PropTypes.string,
  overlayClassName: PropTypes.string,
  stopBackgroundScroll: PropTypes.bool,
  modalClassName: PropTypes.string,
  triggerPropKey: PropTypes.string, // For input elements we might want to trigger at onFocus or onBlur
  shouldTriggerReceiveState: PropTypes.bool, // If you need to style Trigger depending on state.
  TriggerElement: PropTypes.any,
  ModalContent: PropTypes.any,
};

export default React.memo(ModalQuickUrl);
