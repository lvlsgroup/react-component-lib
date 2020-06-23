import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './toggler2.scss';

class Toggler2 extends React.PureComponent {
  getBallSize = (ballSize) => {
    const unit = ballSize && ballSize.replace(/\d+/g, '');
    const ballSizeMatches = ballSize && ballSize.match(/\d+/g);
    const size = ballSizeMatches && ballSizeMatches[0] / 2;
    return size && unit && `${size}${unit}`;
  };

  handleChange = (event) => {
    const { name, passBackDataOnChange, onChange } = this.props;
    onChange && onChange(event, passBackDataOnChange || name);
  };

  render() {
    const {
      inputRef,
      name,
      className,
      inputClassName,
      backgroundClassName,
      sliderClassName,
      sliderBallClassName,
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
          ref={inputRef}
          className={classNames(styles.inputToggler, inputClassName)}
          type="checkbox"
          name={name}
          value={isChecked}
          onChange={this.handleChange}
          onBlur={onBlur}
          checked={isChecked}
        />
        <div
          className={classNames(styles.togglerBackground, backgroundClassName)}
        />
        <div
          style={{ width: `calc(100% - ${ballSize})` }}
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

Toggler2.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
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
  passBackDataOnChange: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  ballSize: PropTypes.string,
};

export default Toggler2;
