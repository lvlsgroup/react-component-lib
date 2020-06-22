import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './listing.scss';

class Listing extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      colClassName,
      list,
      ListItemComponent,
      listItemProps,
      listItemObjectKey,
    } = this.props;

    const objName = listItemObjectKey;

    return (
      <div className={classNames(styles.listing, className)}>
        <div className={classNames(styles.listingContainer, colClassName)}>
          {list?.map((listItem, index) => {
            const listProps = objName
              ? { [objName]: listItem, ...listItemProps, index }
              : { ...listItem, ...listItemProps };

            return (
              <ListItemComponent key={listItem.id || index} {...listProps} />
            );
          })}
        </div>
      </div>
    );
  }
}

Listing.propTypes = {
  className: PropTypes.string,
  colClassName: PropTypes.string,
  listItemObjectKey: PropTypes.string, // If you dont want to ...spread the listing item fields, instead you want to pass them encapsulated in an object to ListItemComponent
  list: PropTypes.array,
  ListItemComponent: PropTypes.any,
  listItemProps: PropTypes.object,
};

export default Listing;
