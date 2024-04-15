import InputOTP from '../lib/inputForm/InputOTP';
import { createStore } from 'solid-js/store';
import { render, cleanup, fireEvent, createEvent, screen } from '@solidjs/testing-library';
import '@testing-library/jest-dom';

window.alert = jest.fn();

describe('InputOTP', () => {

  afterEach(() => {
    cleanup();
  });

  it ('renders component with a submit button', () => {
    
    render(() => <InputOTP />);
    
    const buttonSubmit = screen.getByText('Submit OTP');
    
    expect(buttonSubmit).toBeInTheDocument();
    
  });

  it ('pasting data updates the state and displays code in each input box', async () => {
    const { getByLabelText } = render(() => <InputOTP />);
    
    const input = getByLabelText('OTP Input 0');
    const paste = createEvent.paste(input, {
      clipboardData: {
        getData: () => '123456'
      },
    });
    fireEvent(input, paste);
    await Promise.resolve();

    const input0 = getByLabelText('OTP Input 0');
    const input1 = getByLabelText('OTP Input 1');
    const input2 = getByLabelText('OTP Input 2');
    const input3 = getByLabelText('OTP Input 3');
    const input4 = getByLabelText('OTP Input 4');
    const input5 = getByLabelText('OTP Input 5');

    expect(input0.value).toBe('1');
    expect(input1.value).toBe('2');
    expect(input2.value).toBe('3');
    expect(input3.value).toBe('4');
    expect(input4.value).toBe('5');
    expect(input5.value).toBe('6');
  });

  it ('handles key up events and updates the state correctly', async () => {
    const { getByLabelText } = render(() => <InputOTP />);
    const input = getByLabelText('OTP Input 0');

    fireEvent.keyUp(input, { key: '1' });
    await Promise.resolve();

    const inputNew = getByLabelText('OTP Input 0');
    expect(inputNew.value).toBe('1');
  });

  it ('submits OTP correctly and resets the state', async () => {
    const { getByText, getByLabelText } = render(() => <InputOTP />);
    const submitButton = getByText('Submit OTP');

    fireEvent.keyUp(getByText('OTP Input 0'), { key: '1' });
    fireEvent.keyUp(getByText('OTP Input 1'), { key: '2' });
    fireEvent.keyUp(getByText('OTP Input 2'), { key: '3' });
    fireEvent.keyUp(getByText('OTP Input 3'), { key: '4' });
    fireEvent.keyUp(getByText('OTP Input 4'), { key: '5' });
    fireEvent.keyUp(getByText('OTP Input 5'), { key: '6' });

    await Promise.resolve();

    fireEvent.click(submitButton);

    const input0 = getByLabelText('OTP Input 0');
    const input1 = getByLabelText('OTP Input 1');
    const input2 = getByLabelText('OTP Input 2');
    const input3 = getByLabelText('OTP Input 3');
    const input4 = getByLabelText('OTP Input 4');
    const input5 = getByLabelText('OTP Input 5');

    expect(input0.value).toBe('-');
    expect(input1.value).toBe('-'); 
    expect(input2.value).toBe('-'); 
    expect(input3.value).toBe('-'); 
    expect(input4.value).toBe('-'); 
    expect(input5.value).toBe('-');   
  });
});