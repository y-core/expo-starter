import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render, screen } from '@testing-library/react-native';

import Button from './Button';

describe('Button Component', () => {
  it('renders correctly when children is a string', async () => {
    const testText = 'Click me';
    render(<Button testID="test-button">{testText}</Button>);
    const pressable = await screen.findByTestId('test-button');

    expect(pressable).toHaveTextContent(testText);
  });

  it('renders correctly when children is not a string', async () => {
    const textText = 'Click me';
    const textObject = <Text>{textText}</Text>;
    render(<Button>{textObject}</Button>);
    const screenText = await screen.findByText(textText);

    expect(screenText.children[0]).toBe(textText);
  });

  it('calls onPress when pressed', async () => {
    const textText = 'Click me';
    const mockOnPress = jest.fn();

    render(
      <Button onPress={mockOnPress} testID="test-button">
        {textText}
      </Button>,
    );
    const pressable = await screen.findByTestId('test-button');
    fireEvent.press(pressable);

    expect(mockOnPress).toHaveBeenCalled();
  });

  it('renders loading state correctly', async () => {
    const text = 'Click me';
    const mockOnPress = jest.fn();
    render(
      <Button onPress={mockOnPress} loading>
        {text}
      </Button>,
    );
    const activityIndicator = await screen.findByTestId('loading-indicator');

    expect(activityIndicator).toBeTruthy();
  });

  it('renders link style correctly', async () => {
    const text = 'Click me';
    render(
      <Button asLink testID="test-button">
        {text}
      </Button>,
    );
    const pressable = await screen.findByTestId('test-button');

    expect(pressable).toHaveStyle({ backgroundColor: 'transparent' });
    expect(pressable).toHaveTextContent(text);
  });

  it('does not call onPress when pressed in loading state', async () => {
    const text = 'Click me';
    const mockOnPress = jest.fn();
    render(
      <Button onPress={mockOnPress} loading testID="test-button">
        {text}
      </Button>,
    );
    const pressable = await screen.findByTestId('test-button');

    fireEvent.press(pressable);

    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('toggles disabled on loading', async () => {
    const text = 'Click me';
    const mockOnPress = jest.fn();

    const { rerender } = render(
      <Button loading onPress={mockOnPress} testID="test-button">
        {text}
      </Button>,
    );

    const pressable = await screen.findByTestId('test-button');
    fireEvent.press(pressable);
    expect(mockOnPress).not.toHaveBeenCalled();

    rerender(
      <Button loading={false} testID="test-button" onPress={mockOnPress}>
        {text}
      </Button>,
    );

    fireEvent.press(pressable);
    expect(mockOnPress).toHaveBeenCalled();
  });
});

describe('Button Component Alternate', () => {
  it('calls onPress when pressed 2', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button onPress={mockOnPress} testID="test-button">
        {null}
      </Button>,
    );
    fireEvent(getByTestId('test-button'), 'onPress');
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when pressed in loading state 2', () => {
    const text = 'Click me';
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button onPress={mockOnPress} loading testID="test-button">
        {text}
      </Button>,
    );

    fireEvent(getByTestId('test-button'), 'onPress');
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
