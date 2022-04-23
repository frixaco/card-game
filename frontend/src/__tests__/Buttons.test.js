import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DrawOrReset from '../components/DrawOrReset';
import Button from '../components/common/Button';

test('Button click handler fires', async () => {
  const buttonText = 'Deal';
  const onClick = jest.fn();

  render(<Button type="primary" text={buttonText} onClick={onClick} aria-label="Deal" />);

  fireEvent.click(screen.getByText(buttonText));

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('Button click handler fires', async () => {
  const buttonText = 'Reset';
  const onClick = jest.fn();

  render(<Button type="secondary" text={buttonText} onClick={onClick} aria-label="Reset" />);

  fireEvent.click(screen.getByText(buttonText));

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('Draw and Reset buttons click handlers fire', async () => {
  const handleDraw = jest.fn();
  const handleReset = jest.fn();

  render(<DrawOrReset handleDraw={handleDraw} handleReset={handleReset} />);

  fireEvent.click(screen.getByText('Deal'));
  expect(handleDraw).toHaveBeenCalledTimes(1);

  fireEvent.click(screen.getByText('Reset'));
  expect(handleReset).toHaveBeenCalledTimes(1);
});
