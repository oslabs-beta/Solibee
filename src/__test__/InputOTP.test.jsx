import InputOTP from '../lib/inputForm/InputOTP';

import { render, cleanup, fireEvent, screen } from '@solidjs/testing-library';
import '@testing-library/jest-dom';

describe('InputOTP', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders component with a submit button', () => {
    const { getByPlaceholderText } = render(() => <InputOTP />);

    const buttonSubmit = screen.getByText('Submit OTP');

    expect(buttonSubmit).toBeInTheDocument();
  });

  it('pasting data updates the state', () => {});

  it('typing numbers updates the state', () => {});

  it('pressing backspace removes digits', () => {});

  it('submitting OTP resets the state', () => {});
});
