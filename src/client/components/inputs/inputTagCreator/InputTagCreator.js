import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CreatableSelect from 'react-select/creatable';
import styles from './inputTagCreator.scss';

class InputTagCreator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  handleChange = (value, actionMeta) => {
    if (actionMeta.action === 'remove-value') {
      const { onDelete } = this.props;
      onDelete && onDelete(value);
    } else if (actionMeta.action === 'pop-value') {
      // Delete with backspace on keyboard
      const { onDelete } = this.props;
      onDelete && onDelete(value);
    } else if (actionMeta.action === 'clear') {
      const { onDeleteAll } = this.props;
      onDeleteAll && onDeleteAll(value);
    }

    this.setState(() => {
      return {
        inputValue: '',
      };
    });
  };

  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
  };

  handleKeyDown = (event) => {
    const { inputValue } = this.state;
    const { values, preventDuplicates } = this.props;

    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        if (preventDuplicates) {
          const exists = values?.find((value) => {
            return value.value === inputValue;
          });
          if (!exists) {
            this.addItem(event, inputValue);
          } else {
            window.alert(`${inputValue} has already been added`);
          }
        } else {
          this.addItem(event, inputValue);
        }
    }
  };

  addItem = (event, inputValue) => {
    this.setState(() => {
      return {
        inputValue: '',
      };
    });
    this.props.onTabOrEnter(inputValue);
    event.preventDefault();
  };

  render() {
    const {
      instanceId,
      containerClassName,
      jsStyles,
      placeholder,
      onDeleteAll,
      onDelete,
      isDisabled,
      values,
    } = this.props;
    const { inputValue } = this.state;

    return (
      <CreatableSelect
        instanceId={instanceId}
        className={classNames(
          styles.inputTagCreatorDefaultStyles,
          containerClassName
        )}
        classNamePrefix={'innerClassesPrefix'}
        styles={jsStyles}
        value={values}
        inputValue={inputValue}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder={placeholder}
        isClearable={!!onDeleteAll}
        isDisabled={isDisabled}
        // Below are some props which are needed to clean component so it wont look like a normal dropdown select
        isMulti={true} // This component should always be multi
        menuIsOpen={false} // removes dropdown not needed for this component
        components={{
          DropdownIndicator: null, // removes right dropdown btn not needed for this component
          ...(!onDelete && { MultiValueRemove: () => null }), // remove item delete button
        }}
      />
    );
  }
}

InputTagCreator.defaultProps = {
  placeholder: '',
  preventDuplicates: true,
  jsStyles: {},
};

InputTagCreator.propTypes = {
  containerClassName: PropTypes.string,
  instanceId: PropTypes.string, // Is having more than one component on the same page you need to provide an instance id
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  jsStyles: PropTypes.object,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  preventDuplicates: PropTypes.bool,
  onDeleteAll: PropTypes.func,
  onDelete: PropTypes.func,
  onTabOrEnter: PropTypes.func,
};

export default InputTagCreator;
