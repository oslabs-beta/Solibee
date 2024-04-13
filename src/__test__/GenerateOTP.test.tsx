import GenerateOTP from '../lib/inputForm/GenerateOTP';
import { render, cleanup, fireEvent, screen } from '@solidjs/testing-library';
import '@testing-library/jest-dom';

jest.mock('clipboard-copy', () => jest.fn());

describe('GenerateOTP', () => {

  // let getByText: (text: string) => HTMLElement;

  // beforeEach(() => {
    // const result = render(() => <GenerateOTP />);
    // getByText = result.getByText;
  // });

  afterEach(() => {
    cleanup();
  });

  it ('renders component with correct text', () => {
    // Verify if the component renders with the correct text
    render(() => <GenerateOTP />);
    const buttonRegenerate = screen.getByText('Regenerate');
    const buttonCopy = screen.getByText('Copy');
    expect(buttonRegenerate).toBeInTheDocument();
    expect(buttonCopy).toBeInTheDocument();
  });

  it ('regenerate a new OTP and displays it each time the button is clicked', async () => {
    const { getByText } = render(() => <GenerateOTP />);
    const initialOTP = getByText(/Your one-time password is:/).textContent;
    const buttonRegenerate = screen.getByText('Regenerate');
    
    fireEvent.click(buttonRegenerate);
    await Promise.resolve();

    const newOTP = getByText(/Your one-time password is:/).textContent;
    expect(newOTP).not.toEqual(initialOTP);
  });

  it ('copies the new generated OTP after OTP is regenerated', async () => {
  
    const { getByText, findByText } = render(() => <GenerateOTP />);

    const initialOTPElement = getByText(/Your one-time password is:/).querySelector('span') as HTMLSpanElement;
    const initialOTP = initialOTPElement.textContent;
    const regenerateButton = getByText('Regenerate');
    fireEvent.click(regenerateButton);
    await Promise.resolve();

    const newOTPElement = (await findByText(/Your one-time password is:/)).querySelector('span') as HTMLSpanElement;;
    const newOTP = newOTPElement.textContent;

    const copyButton = getByText('Copy');
    fireEvent.click(copyButton);
    await Promise.resolve();

    expect(newOTP).not.toBe(initialOTP);
    expect(jest.requireMock('clipboard-copy')).toHaveBeenCalledWith(newOTP);
  });
});
  