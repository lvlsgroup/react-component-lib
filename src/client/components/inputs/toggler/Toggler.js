import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.scss';

class Toggler extends React.PureComponent {
  render() {
    const {
      className,
      inputClassName,
      backgroundClassName,
      sliderClassName,
      sliderBallClassName,
      onChange,
      onBlur,
      isChecked,
      checkedLabel,
      unCheckedLabel,
      name,
    } = this.props;
    return (
      <label className={classNames(styles.toggler, className)}>
        <input
          className={classNames(styles.inputToggler, inputClassName)}
          type="checkbox"
          name={name}
          value={isChecked}
          onChange={onChange}
          onBlur={onBlur}
          checked={isChecked}
        />
        <div
          className={classNames(styles.togglerBackground, backgroundClassName)}
        />
        <div className={classNames(styles.slider, sliderClassName)}>
          {checkedLabel && (
            <span className={classNames(styles.checkedLabel)}>
              {checkedLabel}
            </span>
          )}
          <div className={classNames(styles.sliderBall, sliderBallClassName)} />
          {unCheckedLabel && (
            <span className={classNames(styles.unCheckedLabel)}>
              {unCheckedLabel}
            </span>
          )}
        </div>
      </label>
    );
  }
}

Toggler.propTypes = {
  inputClassName: PropTypes.string,
  backgroundClassName: PropTypes.string,
  sliderClassName: PropTypes.string,
  sliderBallClassName: PropTypes.string,
  unCheckedLabel: PropTypes.string,
  checkedLabel: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
};

export default Toggler;
