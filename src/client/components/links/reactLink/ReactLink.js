import React, { PureComponent } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class ReactLink extends PureComponent {
  render() {
    const { className, to, ...rest } = this.props;

    if (to && to.match && to.match(/https*:\/\/\w+.\w+/)) {
      return (
        <a
          className={className}
          href={to}
          target={'_blank'}
          rel="noopener noreferrer"
          {...rest}
        />
      );
    } else {
      const toToJs = to && to.toJS ? to.toJS() : to;

      return (
        <ReactRouterLink className={className} to={toToJs || ''} {...rest} />
      );
    }
  }
}

ReactLink.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  title: PropTypes.string,
  replace: PropTypes.bool,
  component: PropTypes.elementType,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.object,
    }),
    PropTypes.func,
  ]),
};

export default ReactLink;
