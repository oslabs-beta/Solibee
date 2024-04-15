import Area from '../lib/drag-and-drop/Area';
import { createStore } from 'solid-js/store';
import { render, cleanup, fireEvent, createEvent, screen } from '@solidjs/testing-library';
import '@testing-library/jest-dom';



describe('Input File', () => {

  afterEach(() => {
    cleanup();
  });

  it ('renders component with correct text', () => {
    
    render(() => <InputFile />);
    
    const buttonUpload = screen.getByText('Upload');
    
    expect(buttonUpload).toBeInTheDocument();
  
  });

  it ('clicking the Upload button logs the file name if a file is selected', async () => {
    
  });

  it ('clicking the Upload button logs an error if no file is selected', async () => {
   
  });
});



