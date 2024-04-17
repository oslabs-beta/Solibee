import SwitchDemo from '../lib/switch/SwitchDemo';
import { render, cleanup, screen, fireEvent, waitFor } from '@solidjs/testing-library';
import '@testing-library/jest-dom';



describe('Accordion Component', () => {
  afterEach(() => {
    cleanup();
  });

  it ('renders the component', () => {
    const { getByText } = render(() => <SwitchDemo />);
    const text = getByText('Light Mode');

    expect(text).toBeInTheDocument();
  });

  it ('changes the state by toggling the switch', () => {
    const { getByText, getByTestId } = render(() => <SwitchDemo />);
    const textLight = getByText('Light Mode');

    const button = getByTestId('switch-container');
    fireEvent.click(button);

    const textDark = getByText('Dark Mode');

    expect(textLight).not.toBeInTheDocument();
    expect(textDark).toBeInTheDocument();
  });

});