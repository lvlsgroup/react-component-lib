import React from 'react';
import PropTypes from 'prop-types';
import { TriangleNarrow } from '@rc-lib-client/components/icons/triangles/triangles';
import { CheckmarkFatUtf } from '@rc-lib-client/components/icons/checkMarks/checkMarks';
import styles from './styles.scss';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { listOpen } = this.state;

    if (this.props.selectedItem !== prevProps.selectedItem) {
      this.close();
    } else if (prevState.listOpen !== listOpen) {
      setTimeout(() => {
        if (listOpen) {
          window.addEventListener('click', this.close);
        } else {
          window.removeEventListener('click', this.close);
        }
      }, 0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.close);
  }

  close = () => {
    this.setState({
      listOpen: false,
    });
  };

  toggleList = () => {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  };

  stopPropagation = (event) => {
    event.stopPropagation();
  };

  render() {
    const {
      className,
      classNameMenu,
      list,
      selectedItem,
      onSelectItem,
    } = this.props;
    const { listOpen } = this.state;

    return (
      <div className={`${styles.dropDown}${className ? ` ${className}` : ''}`}>
        <div className={styles.header} onClick={this.toggleList}>
          <div className={styles.title}>
            {selectedItem && selectedItem.title}
          </div>
          {listOpen ? <TriangleNarrow degree={-90} /> : <TriangleNarrow />}
        </div>
        {listOpen && (
          <ul
            className={`${styles.dropDownMenu}${
              classNameMenu ? classNameMenu : ''
            }`}
            onClick={this.stopPropagation}
          >
            {list &&
              list.map((item) => {
                return (
                  <DropdownItem
                    key={item.id}
                    item={item}
                    selectedItem={selectedItem}
                    onItemClick={onSelectItem}
                  />
                );
              })}
          </ul>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string,
  classNameMenu: PropTypes.string,
  list: PropTypes.array,
  selectedItem: PropTypes.object,
  onSelectItem: PropTypes.func,
};

export default Dropdown;

function DropdownItem({ item, selectedItem, onItemClick }) {
  function handleItemClick() {
    onItemClick(item);
  }

  const isSelected = item.id === selectedItem.id;

  return (
    <li className={styles.dropDownMenuItem} onClick={handleItemClick}>
      <span className={styles.dropDownMenuItemText}>{item.title}</span>
      {isSelected && <CheckmarkFatUtf />}
    </li>
  );
}
