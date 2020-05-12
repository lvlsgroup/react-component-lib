import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.scss';

class Toggler extends React.PureComponent {
  getBallSize = (ballSize) => {
    const ballSizeMatches = ballSize && ballSize.match(/\d+/g);
    const size = ballSizeMatches && ballSizeMatches[0] / 2;
    return size && `${size}px`;
  };

  render() {
    const {
      name,
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
      width,
      height,
      ballSize,
    } = this.props;

    return (
      <label
        style={{ width: width, height: height }}
        className={classNames(styles.toggler, className)}
      >
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
        <div
          style={{ width: `calc(100% - ${ballSize});` }}
          className={classNames(styles.slider, sliderClassName)}
        >
          {checkedLabel && (
            <span className={classNames(styles.checkedLabel)}>
              {checkedLabel}
            </span>
          )}
          <div
            style={{
              width: ballSize,
              height: ballSize,
              padding: this.getBallSize(ballSize),
            }}
            className={classNames(styles.sliderBall, sliderBallClassName)}
          />
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
