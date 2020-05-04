import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Button from '@rc-lib-client/components/inputs/button/Button';
import ScaleLoader from '@rc-lib-client/components/loaders/scaleLoader/ScaleLoader';
import styles from './buttonDemo.scss';

function ButtonDemo() {
  return <Button label={'SIMPLE BUTTON'} />;
}

export default ButtonDemo;

function ButtonLoaderDemo() {
  const [isLoading, setLoading] = useState(true);

  const onMount = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(onMount, []);

  const onClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Button
      className={classNames(styles.buttonLoaderDemo)}
      onClick={onClick}
      label={'Click to show loading'}
      startIcon={
        isLoading && (
          <ScaleLoader className={styles.spinner} color={'#1d1d1d'} />
        )
      }
      labelClassName={classNames(isLoading && styles.hideOnLoading)}
      disabled={isLoading}
    />
  );
}

export { ButtonLoaderDemo };
