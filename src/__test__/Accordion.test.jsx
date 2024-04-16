import Accordion from '../lib/accordion/Accordion';
import { render, cleanup, screen, fireEvent, waitFor } from '@solidjs/testing-library';
import '@testing-library/jest-dom';



describe('Accordion Component', () => {
  afterEach(() => {
    cleanup();
  });

  it ('renders the component without crashing', () => {
    const { getAllByTestId } = render(() => <Accordion />);
    const wrapper = getAllByTestId('wrapper');

    expect(wrapper[0]).toBeInTheDocument();
  });

  it('clicking on a arrow down toggles its open', async () => {
    const { getAllByTestId, getAllByRole } = render(() => <Accordion />);
    
    const buttons = getAllByRole('button');
    const buttonFirst = buttons[0];
    
    fireEvent.click(buttonFirst);
    await waitFor(() => {
      const hiddenDivs = getAllByTestId('hidden');
      const hiddenDivFirst = hiddenDivs[0];
      expect(hiddenDivFirst).toBeVisible();
    });
  });
});
