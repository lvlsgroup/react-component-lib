import React from 'react';
import Toggler from '../Toggler';
import styles from './togglerDemo.scss';

function TogglerDemo({ name = 'TogglerDemo' }) {
  return <Toggler name={name} />;
}

function TogglerWithText({ name = 'TogglerWithText' }) {
  return <Toggler unCheckedLabel="No" checkedLabel="Yes" name={name} />;
}

function TogglerWithJsSize({ name = 'TogglerWithJsSize' }) {
  return <Toggler name={name} width="100px" height="50px" ballSize="30px" />;
}

function TogglerAcampDemo({ name = 'TogglerAcampDemo' }) {
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

export { TogglerDemo, TogglerWithText, TogglerWithJsSize, TogglerAcampDemo };
