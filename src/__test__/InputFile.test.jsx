import InputFile from '../lib/inputForm/InputFile';
import { render, cleanup, fireEvent, screen } from '@solidjs/testing-library';
import '@testing-library/jest-dom';
import { createSignal } from 'solid-js';

describe('Input File', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders component with correct text', () => {
    render(() => <InputFile />);

    const buttonUpload = screen.getByText('Upload');

    expect(buttonUpload).toBeInTheDocument();
  });

  it('clicking the Upload button logs the file name if a file is selected', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { getByText, getByRole, getByTestId } = render(() => <InputFile />);

    const inputElement = getByTestId('upInput');
    const uploadButton = getByText('Upload');

    fireEvent.change(inputElement, {
      target: { files: [new File(['file contents'], 'test.txt')] },
    });
    await Promise.resolve();

    fireEvent.click(uploadButton);
    await Promise.resolve();

    expect(consoleSpy).toHaveBeenCalledWith('Uploading file:', 'test.txt');
    consoleSpy.mockRestore();
  });

  it('clicking the Upload button logs an error if no file is selected', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const { getByText } = render(() => <InputFile />);

    const uploadButton = getByText('Upload');

    fireEvent.click(uploadButton);
    await Promise.resolve();

    expect(consoleSpy).toHaveBeenCalledWith('No file selected.');
  });
});
