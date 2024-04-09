import GenerateOTP from '../lib/inputForm/GenerateOTP';
import { render, cleanup } from '@solidjs/testing-library';
import '@testing-library/jest-dom';

describe('GenerateOTP', () => {

  let getByText: (text: string) => HTMLElement;

  beforeEach(() => {
    const result = render(() => <GenerateOTP />);
    getByText = result.getByText;
  });

  afterEach(() => {
    cleanup();
  });

  it ('renders component with correct text', () => {
    // Verify if the component renders with the correct text
    expect(getByText('Regenerate')).toBeInTheDocument();
    expect(getByText('Copy')).toBeInTheDocument();
  });

  it ('regenerate a new OTP and displays it each time the button is clicked', () => {

  })
});
  