import Accordion from '../lib/accordion/Accordion';
import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor,
} from '@solidjs/testing-library';
import '@testing-library/jest-dom';

describe('Accordion Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the component', () => {
    const { getAllByTestId } = render(() => <Accordion />);
    const wrapper = getAllByTestId('wrapper');

    expect(wrapper[0]).toBeInTheDocument();
  });

  it('clicking on a arrow toggles it open', async () => {
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

  it('clicking on a arrow toggles it close', async () => {
    const { getAllByTestId, getAllByRole } = render(() => <Accordion />);

    const buttons = getAllByRole('button');
    const buttonFirst = buttons[0];

    fireEvent.click(buttonFirst);
    fireEvent.click(buttonFirst);

    await waitFor(() => {
      const hiddenContent = getAllByTestId('hidden')[0];
      const computedStyle = window.getComputedStyle(hiddenContent);
      // Get the max-height property
      const maxHeight = computedStyle.getPropertyValue('max-height');
      // Assert that the max-height property is either an empty string or '0px' when closed
      expect(maxHeight === '' || maxHeight === '0px').toBeTruthy();
    });
  });
});
