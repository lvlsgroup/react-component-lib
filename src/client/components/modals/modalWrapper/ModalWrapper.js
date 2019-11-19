import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class ModalWrapper extends PureComponent {
  componentDidMount() {
    if (this.props.onMounted) {
      this.props.onMounted();
    }
    window.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
  }

  handleKeyUp = (e) => {
    const { toggleModal } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        toggleModal();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  render() {
    const { className, modalClassName, children, toggleModal } = this.props;

    return (
      <div
        className={`${styles.modalWrapper}${className ? ` ${className}` : ''}`}
      >
        <div
          className={`${styles.modal}${
            modalClassName ? ` ${modalClassName}` : ''
          }`}
          id="modal"
        >
          {children}
        </div>
        <div className={styles.modalOverlay} onClick={toggleModal} />
      </div>
    );
  }
}

ModalWrapper.propTypes = {
  className: PropTypes.string,
  modalClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  toggleModal: PropTypes.func,
  onMounted: PropTypes.func,
};

export default ModalWrapper;
