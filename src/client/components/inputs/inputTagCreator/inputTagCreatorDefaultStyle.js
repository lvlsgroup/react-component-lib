const inputTagCreatorDefaultStyle = {
  control: (styles) => ({
    ...styles,
    borderRadius: 0,
    ':hover': {
      cursor: 'text',
    },
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ':hover': {
      cursor: 'pointer',
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    ':hover': {
      cursor: 'pointer',
    },
  }),
};

export default inputTagCreatorDefaultStyle;
