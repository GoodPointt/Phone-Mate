import * as Yup from 'yup';

export const INITIAL_VALUES = {
  name: '',
  number: '',
};

export const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Z'-\s]+$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^[0-9\s+()-]+$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});
