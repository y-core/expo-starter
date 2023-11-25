import * as Yup from 'yup';

export const signInValidation = Yup.object().shape({
  username: Yup.string().required('emailIsRequired').email('mustBeValidEmail'),
  password: Yup.string().required('passwordIsRequired'),
});

export const signUpValidation = Yup.object().shape({
  username: Yup.string().required('emailIsRequired').email('mustBeValidEmail'),
  password: Yup.string()
    .required('passwordIsRequired')
    .min(8, 'passwordFormat')
    .matches(/[0-9]/, 'passwordFormat')
    .matches(/[a-z]/, 'passwordFormat')
    .matches(/[A-Z]/, 'passwordFormat')
    .matches(/[^\w]/, 'passwordFormat'),
});

export const forgotPasswordValidation = Yup.object().shape({
  email: Yup.string().required('emailIsRequired').email('mustBeValidEmail'),
});

export const resetPasswordValidation = Yup.object().shape({
  password: Yup.string()
    .required('passwordIsRequired')
    .min(8, 'passwordFormat')
    .matches(/[0-9]/, 'passwordFormat')
    .matches(/[a-z]/, 'passwordFormat')
    .matches(/[A-Z]/, 'passwordFormat')
    .matches(/[^\w]/, 'passwordFormat'),
  password_confirmation: Yup.string()
    .required('confirmPasswordIsRequired')
    .oneOf([Yup.ref('password')], 'passwordsMustMatch'),
});
