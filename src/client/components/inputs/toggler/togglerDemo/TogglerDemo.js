import React from 'react';
import Toggler from '../Toggler';
import styles from './togglerDemo.scss';

function TogglerDemo({ name = 'defaultToggler' }) {
  return <Toggler name={name} />;
}

function TogglerCheckedDemo({ name = 'togglerCheckedDemo' }) {
  return <Toggler isChecked={true} name={name} />;
}

function TogglerWithTextDemo({ name = 'togglerWithText' }) {
  return (
    <Toggler
      className={styles.togglerWithTextDemoProp}
      unCheckedLabel="No"
      checkedLabel="Yes"
      name={name}
    />
  );
}

export { TogglerDemo, TogglerCheckedDemo, TogglerWithTextDemo };
