import InputForm from '../lib/inputForm/InputForm';

import { render, cleanup, fireEvent, screen } from '@solidjs/testing-library';
import '@testing-library/jest-dom';

describe('Input Form', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders component with a name and email input forms and a submit button', () => {
    const { getByPlaceholderText } = render(() => <InputForm />);

    const buttonSubmit = screen.getByText('Submit');
    const nameInput = getByPlaceholderText('solibee') as HTMLInputElement;
    const emailInput = getByPlaceholderText(
      'solibee@gmail.com',
    ) as HTMLInputElement;

    expect(buttonSubmit).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it('name input and email input update their corresponding signals', () => {
    const { getByPlaceholderText } = render(() => <InputForm />);

    const nameInput = getByPlaceholderText('solibee') as HTMLInputElement;
    const emailInput = getByPlaceholderText(
      'solibee@gmail.com',
    ) as HTMLInputElement;

    fireEvent.input(nameInput, { target: { value: 'John' } });
    fireEvent.input(emailInput, { target: { value: 'john@test.com' } });

    expect(nameInput.value).toBe('John');
    expect(emailInput.value).toBe('john@test.com');
  });

  it('submit functionality handles correct inputs', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const { getByLabelText, getByText, getByPlaceholderText } = render(() => (
      <InputForm />
    ));

    const nameInput = getByPlaceholderText('solibee') as HTMLInputElement;
    const emailInput = getByPlaceholderText(
      'solibee@gmail.com',
    ) as HTMLInputElement;

    fireEvent.input(nameInput, { target: { value: 'John' } });
    fireEvent.input(emailInput, { target: { value: 'john@test.com' } });

    fireEvent.submit(getByText('Submit'));

    expect(consoleSpy).toHaveBeenCalledWith('Submitted:', {
      name: 'John',
      email: 'john@test.com',
    });

    consoleSpy.mockRestore();
  });
});
