import Search from '../lib/searchButton/Search';
import { render, cleanup, screen } from '@solidjs/testing-library';
import '@testing-library/jest-dom';

describe('Search Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders search component', () => {
    render(() => <Search />);
    const search = screen.getByLabelText('Search');
    expect(search).toBeInTheDocument();
  });

  it('checks if input field has the correct placeholder text', () => {
    render(() => <Search />);
    const searchInput = screen.getByLabelText('Search input');
    const placeholderText = 'Search ...';
    expect(searchInput).toHaveAttribute('placeholder', placeholderText);
  });

  it('check if input field has correct id', () => {
    render(() => <Search />);
    const searchInput = screen.getByLabelText('Search input');
    const inputId = 'search-input';
    expect(searchInput).toHaveAttribute('id', inputId);
  });
});
