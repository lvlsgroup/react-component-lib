import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './deprecatedToggler.scss';

class DeprecatedToggler extends React.PureComponent {
  render() {
    const {
      className,
      inputClassName,
      onChange,
      onBlur,
      isChecked,
      name,
    } = this.props;
    return (
      <label className={classNames(styles.toggler, className)}>
        <input
          className={classNames(styles.togglerInput, inputClassName)}
          type="checkbox"
          name={name}
          value={isChecked}
          onChange={onChange}
          onBlur={onBlur}
          checked={isChecked}
        />
        <div className={styles.slider} />
      </label>
    );
  }
}

DeprecatedToggler.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
};

export default DeprecatedToggler;
