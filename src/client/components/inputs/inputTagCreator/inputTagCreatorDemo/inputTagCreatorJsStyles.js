const inputTagCreatorJsStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    ':hover': {
      cursor: 'text',
    },
  }),
  menu: (styles) => ({
    ...styles,
    display: 'none',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: 'black',
      color: 'white',
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
      cursor: 'pointer',
    },
  }),
};

export default inputTagCreatorJsStyles;
