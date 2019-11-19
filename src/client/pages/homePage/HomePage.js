import React from 'react';
import ProgressBar from '@rc-lib-client/components/loaders/progressBar/ProgressBar';
import styles from './homePage.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.homeRoute}>
        <h1 className={styles.title}>Home page</h1>
        <ProgressBar className={styles.progress} progress={33} />
        <ProgressBar className={styles.progress} progress={55} />
        <ProgressBar className={styles.progress} progress={66} />
        <ProgressBar className={styles.progress} progress={100} />
        <ProgressBar className={styles.progress} progress={88} />
      </div>
    );
  }
}

export default HomePage;
