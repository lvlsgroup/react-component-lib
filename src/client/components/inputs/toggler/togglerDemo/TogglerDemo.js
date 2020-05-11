import React from 'react';
import Toggler from '../Toggler';
import styles from './togglerDemo.scss';

function TogglerDemo({ name = 'defaultToggler' }) {
  return <Toggler name={name} />;
}

function TogglerWithTextDemo({ name = 'togglerWithText' }) {
  return (
    <Toggler
      sliderClassName={styles.sliderClassNameProp}
      inputClassName={styles.inputClassNameProp}
      name={name}
    />
  );
}

export { TogglerDemo, TogglerWithTextDemo };
