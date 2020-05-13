import React, { useState } from 'react';
import classNames from 'classnames';
import InputWithCounter from '@rc-lib-client/components/inputs/inputWithCounter/InputWithCounter';
import styles from './inputWithCounterDemos.scss';

function InputWithCounterDemo() {
  const [currentValue, setCurrentValue] = useState();

  return (
    <div>
      <h5>Plain</h5>
      <p>Most plain usage</p>
      <InputWithCounter
        onChange={setCurrentValue}
        currentValue={currentValue}
      />
    </div>
  );
}

function InputWithCounterMaxRange3Demo() {
  const [currentValue, setCurrentValue] = useState();

  return (
    <div>
      <h5>Plain</h5>
      <p>Max range 3 no min range</p>
      <InputWithCounter
        onChange={setCurrentValue}
        currentValue={currentValue}
        maxRange={3}
      />
    </div>
  );
}

function InputWithCounterAllerDemo() {
  const [currentValue, setCurrentValue] = useState();

  return (
    <div>
      <h5>Aller Design</h5>
      <p>allowed Range: -1 - 10</p>
      <InputWithCounter
        className={classNames(styles.inputWithCounterAllerDemo)}
        classNameInput={styles.countValue}
        classNameCounterBtnLabel={styles.counterBtnLabels}
        minRange={-1}
        maxRange={10}
        onChange={setCurrentValue}
        currentValue={currentValue}
      />
    </div>
  );
}

export {
  InputWithCounterDemo,
  InputWithCounterMaxRange3Demo,
  InputWithCounterAllerDemo,
};
