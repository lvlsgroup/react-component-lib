import React from 'react';
import PropTypes from 'prop-types';
import styles from './animatedCarousel.scss';

class AnimatedCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  componentDidMount() {
    this.updateSliderStyles();
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (children !== prevProps.children) {
      if (
        children &&
        children.size &&
        prevProps.children &&
        prevProps.children.size
      ) {
        if (children.size === prevProps.children.size) {
          const hasDif = children.find((child, index) => {
            const prevChild = prevProps.children[index];
            return prevChild.key !== child.key;
          });
          if (hasDif) {
            this.updateSliderStyles();
          }
        } else {
          // Update styles if size is different
          this.updateSliderStyles();
        }
      }
    }
  }

  updateSliderStyles = () => {
    const { children, animationDuration } = this.props;
    const size = children.length;
    const node = this.sliderRef.current;
    const sliderWidth = node.offsetWidth;

    const childNodes = [...node.children];

    const startSize = size === '1' ? size * sliderWidth : 0;
    const extraChildrenWidth = childNodes.reduce((accum, item) => {
      const extraWidth = item.offsetWidth - sliderWidth;
      return extraWidth > 0 ? accum + extraWidth : accum;
    }, startSize);

    const increasedTranslateX = extraChildrenWidth / sliderWidth;
    const translateX = `${size * 100 * (1 + increasedTranslateX)}`;

    node.style.setProperty('--rollingSliderTransX', `-${translateX}%`);
    node.style.setProperty(
      'animation-duration',
      `${size * animationDuration}s`
    );
  };

  render() {
    const { children, className } = this.props;
    return (
      <div
        className={`${styles.rollingSliderContainer}${
          className ? ` ${className}` : ''
        }`}
      >
        <div ref={this.sliderRef} className={styles.rollingSlider}>
          {children}
        </div>
      </div>
    );
  }
}

AnimatedCarousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  animationDuration: PropTypes.number,
};

export default AnimatedCarousel;
