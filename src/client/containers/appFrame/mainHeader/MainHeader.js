import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import ReactLink from '@rc-lib-client/components/links/reactLink/ReactLink';
import Flex from '@rc-lib-client/components/flex/Flex';
import styles from './mainHeader.scss';

class MainHeader extends PureComponent {
  render() {
    return (
      <header className={styles.mainHeader}>
        <div className={styles.stickyHeader}>
          <Flex className={styles.menuLinkListing}>
            <ReactLink className={styles.menuLink} to={`/`}>
              Home
            </ReactLink>
            <ReactLink className={styles.menuLink} to={`/inputs-page`}>
              Inputs Page
            </ReactLink>
          </Flex>
        </div>
      </header>
    );
  }
}

export default withRouter(MainHeader);
