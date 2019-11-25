import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';

export default function FormWrapper({
  initialValues,
  validationSchema,
  onSubmit,
  component,
  validateOnBlur,
  validateOnChange,
  ...additionalProps
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      render={component}
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      {...additionalProps}
    />
  );
}

FormWrapper.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  validateOnBlur: PropTypes.bool,
  validateOnChange: PropTypes.bool,
  additionalProps: PropTypes.object,
};
