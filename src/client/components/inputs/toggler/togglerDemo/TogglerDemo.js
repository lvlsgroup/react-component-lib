import React from 'react';
import Toggler from '../Toggler';
import styles from './togglerDemo.scss';

function TogglerDemo({ name = 'defaultToggler' }) {
  return <Toggler name={name} />;
}

function TogglerWithText({ name = 'togglerWithText' }) {
  return <Toggler unCheckedLabel="No" checkedLabel="Yes" name={name} />;
}

function TogglerAcampDemo({ name = 'togglerWithText' }) {
  return (
    <Toggler
      className={styles.togglerAcampDemoProp}
      sliderClassName={styles.sliderProp}
      sliderBallClassName={styles.sliderBallProp}
      backgroundClassName={styles.backgroundProp}
      unCheckedLabel="No"
      checkedLabel="Yes"
      name={name}
    />
  );
}

export { TogglerDemo, TogglerWithText, TogglerAcampDemo };
