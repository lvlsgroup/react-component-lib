import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@rc-lib-client/components/inputs/button/Button';
import Flex from '@rc-lib-client/components/flex/Flex';
import CrossIcon from '@rc-lib-client/components/icons/crossIcon/CrossIcon';
import Image from '@rc-lib-client/components/images/image/Image';
import styles from './defaultDialog.scss';

const DefaultDialog = ({
  className,
  title,
  description,
  onConfirm,
  toggleModal,
  btnContainerClassName,
  confirmBtnClassName,
  labelBtnConfirm = 'Yes',
  cancelBtnClassName,
  labelBtnCancel = 'No',
  closeImgClassName,
  closeImgIcon,
  passBackData,
}) => {
  function handleConfirm() {
    onConfirm(toggleModal, passBackData);
  }

  return (
    <div className={classNames(styles.defaultDialog, className)}>
      {closeImgIcon ? (
        <Image
          className={classNames(closeImgClassName)}
          src={closeImgIcon}
          alt="Close"
        />
      ) : (
        <CrossIcon
          className={classNames(styles.btnCross)}
          onClick={toggleModal}
          crossColor="black"
          mdCross
        />
      )}
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      {(onConfirm || toggleModal) && (
        <Flex
          className={classNames(styles.btnContainer, btnContainerClassName)}
        >
          {onConfirm && (
            <Button
              className={classNames(styles.buttonConfirm, confirmBtnClassName)}
              label={labelBtnConfirm}
              onClick={handleConfirm}
            />
          )}
          {toggleModal && (
            <Button
              className={classNames(styles.btnCancel, cancelBtnClassName)}
              label={labelBtnCancel}
              onClick={toggleModal}
            />
          )}
        </Flex>
      )}
    </div>
  );
};

DefaultDialog.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  CustomClose: PropTypes.any,
  description: PropTypes.string,
  onConfirm: PropTypes.func,
  toggleModal: PropTypes.func,
  btnContainerClassName: PropTypes.string,
  confirmBtnClassName: PropTypes.string,
  labelBtnConfirm: PropTypes.string,
  cancelBtnClassName: PropTypes.string,
  labelBtnCancel: PropTypes.string,
  closeImgClassName: PropTypes.string,
  closeImgIcon: PropTypes.string,
  passBackData: PropTypes.any,
};

export default DefaultDialog;
