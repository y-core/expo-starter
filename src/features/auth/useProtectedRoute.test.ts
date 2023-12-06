// __tests__/useProtectedRoute.test.js
import React from 'react';
import { render, act } from '@testing-library/react-native';
import { useAuth } from '~/features/auth/useAuth';
import { useSegments, useRouter } from 'expo-router';

import { useProtectedRoute } from './useProtectedRoute';
import { View } from 'react-native';

// Mocking modules
jest.mock('expo-router');
jest.mock('~/features/auth/useAuth');

describe('useProtectedRoute', () => {
  it('should navigate to /login if user is not authenticated and not in the auth group', () => {
    // Arrange
    useAuth.mockReturnValue({ auth: null });
    useSegments.mockReturnValue(['']);

    const routerReplaceMock = jest.fn();
    useRouter.mockReturnValue({ replace: routerReplaceMock });

    // Act
    render(<TestComponent />);

    // Assert
    expect(routerReplaceMock).toHaveBeenCalledWith('/login');
  });

  it('should navigate to /home if user is authenticated and in the auth group', () => {
    // Arrange
    useAuth.mockReturnValue({ auth: { /* authenticated user data */ } });
    useSegments.mockReturnValue(['(auth)']);

    const routerReplaceMock = jest.fn();
    useRouter.mockReturnValue({ replace: routerReplaceMock });

    // Act
    render(<TestComponent />);

    // Assert
    expect(routerReplaceMock).toHaveBeenCalledWith('/home');
  });

  // Add more tests for other scenarios (e.g., validation errors, loading states, etc.)
});

// A simple component for testing the useProtectedRoute hook
const TestComponent = () => {
  useProtectedRoute();
  return <View/>;
};
