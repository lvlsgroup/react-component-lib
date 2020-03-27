import React, { useState } from 'react';
import InputTagCreator from '@rc-lib-client/components/inputs/inputTagCreator/InputTagCreator';
import { imPush } from '@rc-lib-client/shared/utils/immutableUtils/immutableUtils';
import jsStyles from './inputTagCreatorJsStyles.js';
import styles from './inputTagCreatorDemo.scss';

// Style with classNames
function InputTagCreatorDemoClassNames({ instanceId }) {
  const [values, setValues] = useState();

  function onTabOrEnter(inputValue) {
    setValues(imPush(values, { label: inputValue, value: inputValue }));
  }

  function onDelete(values) {
    setValues(values);
  }

  function onDeleteAll() {
    setValues([]);
  }

  return (
    <InputTagCreator
      instanceId={instanceId}
      containerClassName={styles.inputTagCreatorDemoClassNames}
      placeholder="#"
      values={values}
      onTabOrEnter={onTabOrEnter}
      onDelete={onDelete}
      onDeleteAll={onDeleteAll}
    />
  );
}

// Style with js object
function InputTagCreatorDemoJsStyles({ instanceId }) {
  return (
    <InputTagCreator
      instanceId={instanceId}
      jsStyles={jsStyles}
      placeholder="Type and press enter"
    />
  );
}

export { InputTagCreatorDemoClassNames, InputTagCreatorDemoJsStyles };
