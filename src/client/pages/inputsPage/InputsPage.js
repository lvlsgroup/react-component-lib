import React from 'react';
import Flex from '@rc-lib-client/components/flex/Flex';
import {
  TogglerAcampDemo,
  TogglerDemo,
  TogglerWithJsSize,
  TogglerWithText,
} from '@rc-lib-client/components/inputs/toggler/togglerDemo/TogglerDemo';
import styles from './inputsPage.scss';

class InputsPage extends React.Component {
  render() {
    return (
      <div className={styles.inputsPage}>
        <h1>Inputs Page</h1>
        <div>
          <h3>Togglers</h3>
          <Flex spaceBetween>
            <div>
              <h5>TogglerDemo</h5>
              <TogglerDemo name="isBookable" />
            </div>
            <div>
              <h5>TogglerWithText</h5>
              <TogglerWithText />
            </div>
            <div>
              <h5>TogglerWithJsSize</h5>
              <TogglerWithJsSize />
            </div>
            <div>
              <h5>TogglerAcampDemo</h5>
              <TogglerAcampDemo />
            </div>
          </Flex>
        </div>
      </div>
    );
  }
}

export default InputsPage;