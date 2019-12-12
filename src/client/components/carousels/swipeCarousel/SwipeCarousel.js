import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ReactIdSwiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import styles from './swipeCarousel.scss';

class SwipeCarousel extends React.PureComponent {
  render() {
    const { className, children, ...sliderParams } = this.props;

    return (
      <div className={classNames(className)}>
        <ReactIdSwiper containerClass={styles.reactIdSwiper} {...sliderParams}>
          {children}
        </ReactIdSwiper>
      </div>
    );
  }
}

SwipeCarousel.defaultProps = {
  loop: true,
};

SwipeCarousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  speed: PropTypes.number,
  delay: PropTypes.number,
  spaceBetween: PropTypes.number,
  pagination: PropTypes.shape({
    el: PropTypes.string,
    type: PropTypes.string,
    clickable: PropTypes.bool,
  }),
  navigation: PropTypes.shape({
    nextEl: PropTypes.string,
    prevEl: PropTypes.string,
  }),
};

export default SwipeCarousel;
