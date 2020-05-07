import React, { PureComponent } from 'react';
import {
  AppFrameContext,
  useAppFrame,
} from '@rc-lib-client/context/AppFrameProvider';
import ReactLink from '@rc-lib-client/components/links/reactLink/ReactLink';
import styles from './notFoundPage.scss';

class Tester extends PureComponent {
  static contextType = AppFrameContext;

  onClick = () => {
    this.context.setKey('Tester', 'Testerrrr');
  };

  render() {
    console.log('Tester this.context: ', this.context);

    return (
      <div>
        <button onClick={this.onClick}>CLICK ME</button>
        <h3>{this.context.Tester}</h3>
      </div>
    );
  }
}

const John = React.memo(() => {
  const appFrame = useAppFrame();

  const onClick = () => {
    appFrame.setKey('John', 'Johnnnyy');
  };

  console.log('John this.appFrame: ', appFrame);

  return (
    <div>
      <button onClick={onClick}>CLICK ME</button>
      <h3>{appFrame.John}</h3>
    </div>
  );
});

class NotFoundPage extends PureComponent {
  static contextType = AppFrameContext;

  static loadData(dispatch) {
    return dispatch(
      new Promise((resolve) =>
        resolve({
          key: 'notFoundPage',
          payload: { pageData: 'notFoundPage' },
        })
      )
    );
  }

  componentDidMount() {
    NotFoundPage.loadData(this.context.loadPage);
  }

  render() {
    console.log('NotFoundPage this.context: ', this.context);

    return (
      <div className={styles.notFoundPage}>
        <h1>Not found page</h1>
        <div>
          {this.context &&
            this.context.notFoundPage &&
            this.context.notFoundPage.pageData}
        </div>
        <ReactLink to={`/`}>HOME</ReactLink>
        <Tester />
        <John />
      </div>
    );
  }
}

export default NotFoundPage;
