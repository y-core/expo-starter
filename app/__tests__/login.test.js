import React from 'react';
import { fireEvent, render, screen, userEvent, waitFor } from '@testing-library/react-native';

import Login from '../(auth)/login';

import { lang } from '~/common/utils';
import { useAuth, useAuthRef } from '~/features/auth';

//   jest.mock('expo-router', () => {
//     return { useRouter: () => {} };
//   });

jest.mock('~/features/auth', () => ({
  ...jest.requireActual('~/features/auth'),
  useAuthRef: jest.fn(),
  useAuth: jest.fn(),
}));

const SIGNIN = {
  username: 'chuck@norr.is',
  password: 'Nop@sswordN33ded',
};

const initElements = async () => {
  return {
    usernameLabel: await screen.findByText(lang.auth.usernameLabel),
    passwordLabel: await screen.findByText(lang.auth.passwordLabel),
    usernameInput: await screen.findByPlaceholderText(lang.auth.usernameLabel.toLowerCase()),
    passwordInput: await screen.findByPlaceholderText(lang.auth.passwordLabel.toLowerCase()),
    resetButton: await screen.findByText(lang.auth.forgotPasswordLabel),
    signInButton: await screen.findByText(lang.auth.loginLabel),
    signUpButton: await screen.findByText(lang.auth.registerLabel),
  };
};

const mockSignIn = jest.fn();
const mockSignUp = jest.fn();
const mockReset = jest.fn();
const mockUseAuthRef = jest.fn(() => ({
  username: { current: SIGNIN.username },
  password: { current: SIGNIN.password },
}));

const setup = (jsx) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

beforeEach(() => {
  useAuth.mockReturnValue({
    signIn: mockSignIn,
    signUp: mockSignUp,
    resetPassword: mockReset,
    loading: false,
  });

  useAuthRef.mockImplementation(mockUseAuthRef);
});

describe('login.test', () => {
  test('renders screen elements correctly', async () => {
    render(<Login />);
    const elements = await initElements();

    expect(elements.usernameLabel).toBeDefined();
    expect(elements.passwordLabel).toBeDefined();
    expect(elements.usernameInput).toBeDefined();
    expect(elements.passwordInput).toBeDefined();
    expect(elements.resetButton).toBeDefined();
    expect(elements.signInButton).toBeDefined();
    expect(elements.signUpButton).toBeDefined();
  });

  it('responds to signIn Button pressed', async () => {
    const { user, debug } = setup(<Login />);

    const elements = await initElements();

    fireEvent.changeText(elements.usernameLabel, SIGNIN.username);
    fireEvent.changeText(elements.passwordLabel, SIGNIN.password);
    fireEvent.press(elements.signInButton);

    // await user.clear(elements.usernameInput);
    // await user.type(elements.usernameInput, SIGNIN.username);
    // await user.clear(elements.passwordInput);
    // await user.type(elements.passwordInput, SIGNIN.password);
    // user.press(elements.signInButton);

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith(
        expect.objectContaining({
          username: { current: SIGNIN.username },
          password: { current: SIGNIN.password },
        }),
      );
    });
  });

  it('responds to signUp Button pressed', async () => {
    setup(<Login />);

    const elements = await initElements();

    fireEvent.changeText(elements.usernameLabel, SIGNIN.username);
    fireEvent.changeText(elements.passwordLabel, SIGNIN.password);
    fireEvent.press(elements.signUpButton);

    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith(
        expect.objectContaining({
          username: { current: SIGNIN.username },
          password: { current: SIGNIN.password },
        }),
      );
    });
  });

  it('responds to reset Button pressed', async () => {
    setup(<Login />);

    const elements = await initElements();

    fireEvent.changeText(elements.usernameLabel, SIGNIN.username);
    fireEvent.press(elements.resetButton);

    await waitFor(() => {
      expect(mockReset).toHaveBeenCalledWith(expect.stringContaining(SIGNIN.username));
    });
  });
});
