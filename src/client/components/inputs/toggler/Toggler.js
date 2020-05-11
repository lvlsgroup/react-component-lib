import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.scss';

class Toggler extends React.PureComponent {
  render() {
    const {
      className,
      inputClassName,
      sliderClassName,
      onChange,
      onBlur,
      isChecked,
      name,
    } = this.props;
    return (
      <label className={classNames(styles.toggler, className)}>
        <input
          className={classNames(inputClassName)}
          type="checkbox"
          name={name}
          value={isChecked}
          onChange={onChange}
          onBlur={onBlur}
          checked={isChecked}
        />
        <div className={classNames(styles.slider, sliderClassName)} />
      </label>
    );
  }
}

Toggler.propTypes = {
  inputClassName: PropTypes.string,
  sliderClassName: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
};

export default Toggler;
