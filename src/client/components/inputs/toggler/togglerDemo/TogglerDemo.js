import React from 'react';
import Toggler2 from '../Toggler2';
import styles from './togglerDemo.scss';

function TogglerDemo({ name = 'TogglerDemo' }) {
  return <Toggler2 name={name} />;
}

function TogglerWithText({ name = 'TogglerWithText' }) {
  return <Toggler2 unCheckedLabel="No" checkedLabel="Yes" name={name} />;
}

function TogglerWithJsSize({ name = 'TogglerWithJsSize' }) {
  return <Toggler2 name={name} width="100px" height="50px" ballSize="30px" />;
}

function TogglerAcampDemo({ name = 'TogglerAcampDemo' }) {
  return (
    <Toggler2
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
