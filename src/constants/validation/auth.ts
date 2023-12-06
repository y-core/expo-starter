import { z } from 'zod';

const emailValidation = z
  .string()
  .email('mustBeValidEmail')
  .refine((data) => data.trim() !== '', {
    message: 'emailIsRequired',
  });

const passwordValidation = z
  .string()
  .min(8, { message: 'passwordFormat' })
  .regex(/[0-9]/, { message: 'passwordFormat' })
  .regex(/[a-z]/, { message: 'passwordFormat' })
  .regex(/[A-Z]/, { message: 'passwordFormat' })
  .regex(/[^\w]/, { message: 'passwordFormat' })
  .refine((data) => data.trim() !== '', { message: 'passwordIsRequired' });

export const signInValidation = z.object({
  username: emailValidation,
  password: passwordValidation,
});

export const signUpValidation = z.object({
  username: emailValidation,
  password: passwordValidation,
});

export const forgotPasswordValidation = z.object({
  email: emailValidation,
});

export const resetPasswordValidation = z
  .object({
    password: passwordValidation,
    password_confirmation: passwordValidation,
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'passwordsMustMatch',
    path: ['password_confirmation'],
  });
