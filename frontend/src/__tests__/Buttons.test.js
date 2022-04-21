import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DrawOrReset from '../components/DrawOrReset';
import PrimaryButton from '../components/common/PrimaryButton';
import SecondaryButton from '../components/common/SecondryButton';

test('PrimaryButton click handler fires', async () => {
  const buttonText = 'Deal';
  const onClick = jest.fn();

  render(<PrimaryButton text={buttonText} onClick={onClick} />);

  fireEvent.click(screen.getByText(buttonText));

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('SecondaryButton click handler fires', async () => {
  const buttonText = 'Reset';
  const onClick = jest.fn();

  render(<SecondaryButton text={buttonText} onClick={onClick} />);

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
