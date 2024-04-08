import GenerateOTP from '../lib/inputForm/GenerateOTP';
import { render } from '@solidjs/testing-library';
import '@testing-library/jest-dom';

describe('GenerateOTP', () => {
  test("renders component with correct text", () => {
    // Render the component
    const { getByText, unmount } = render(() => (
      <GenerateOTP />
    ));

    // Verify if the component renders with the correct text
    expect(getByText('Regenerate')).toBeInTheDocument();
    unmount();
  });
});
  