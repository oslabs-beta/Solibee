import GenerateOTP from '../lib/inputForm/GenerateOTP';
import {
  render,
  cleanup,
  fireEvent,
  screen,
  getByTestId,
} from '@solidjs/testing-library';
import '@testing-library/jest-dom';
import clipboardCopy from 'clipboard-copy';

const mockWriteText = jest.fn();
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: mockWriteText,
  },
});

describe('GenerateOTP', () => {
  afterEach(() => {
    cleanup();
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders component with correct text', () => {
    render(() => <GenerateOTP />);
    const buttonRegenerate = screen.getByText('Regenerate');
    const buttonCopy = screen.getByText('Copy');
    expect(buttonRegenerate).toBeInTheDocument();
    expect(buttonCopy).toBeInTheDocument();
  });

  it('regenerate a new OTP and displays it each time the button is clicked', async () => {
    const { getByText } = render(() => <GenerateOTP />);
    const initialOTP = getByText(/Your one-time password is:/).textContent;
    const buttonRegenerate = screen.getByText('Regenerate');

    fireEvent.click(buttonRegenerate);
    await Promise.resolve();

    const newOTP = getByText(/Your one-time password is:/).textContent;
    expect(newOTP).not.toEqual(initialOTP);
  });

  it('copies the new generated OTP after OTP is regenerated', async () => {
    const { getByText, findByText, getByTestId } = render(() => (
      <GenerateOTP />
    ));

    const initialOTPElement = getByText(
      /Your one-time password is:/,
    ).querySelector('span') as HTMLSpanElement;

    const initialOTP = initialOTPElement.textContent;

    const regenerateButton = getByText('Regenerate');
    fireEvent.click(regenerateButton);
    await Promise.resolve();

    const newOTPElement = (
      await findByText(/Your one-time password is:/)
    ).querySelector('span') as HTMLSpanElement;
    const newOTP = newOTPElement.textContent;
    await Promise.resolve();

    const copyButton = screen.getByTestId('copy-button');
    await Promise.resolve();
    fireEvent.click(copyButton);

    expect(mockWriteText).toHaveBeenCalledWith(newOTP);
    expect(newOTP).not.toBe(initialOTP);
  });
});
