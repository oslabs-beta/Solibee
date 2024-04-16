import DragAndDrop from '../lib/DragAndDrop';
import { createStore } from 'solid-js/store';
import { render, cleanup, fireEvent, createEvent, screen, findByTestId, findByText } from '@solidjs/testing-library';
import '@testing-library/jest-dom';
// import { spyOn } from 'jest';



describe('Drag And Drop', () => {

  afterEach(() => {
    cleanup();
  });

  it ('renders "Add New Column" button when showNewColBtn prop is true', () => {

    const { getByText } = render(() => <DragAndDrop showNewColBtn={true} />);

    expect(getByText('Add New Column')).toBeInTheDocument();

  });

  it ('renders columns based on columns prop', async () => {
    const { findAllByTestId } = render(() => <DragAndDrop columns={3} />);
    
    const columns = await findAllByTestId('column');
    Promise.resolve();

    expect(columns.length).toBe(3);
  });

  it ('renders items based on items prop', async () => {
    const { findAllByTestId } = render(() => <DragAndDrop columns={1} items={5}/>);

    const items = await findAllByTestId('item');
    Promise.resolve();

    expect(items.length).toBe(5);
  });

  it ('handles add column functionality', async () => {
    const { findAllByTestId, getByText } = render(() => <DragAndDrop showNewColBtn={true} />);
    const addColBtn = getByText('Add New Column');

    fireEvent.click(addColBtn);
    await Promise.resolve();

    const columns = await findAllByTestId('column');

    expect(columns.length).toBe(1);
  });

  it ('handles add item functionality',  async () => {
    const { findAllByTestId, getByText } = render(() => <DragAndDrop columns={1} />);

    const addItemBtn = getByText('New Item');

    fireEvent.click(addItemBtn);
    await Promise.resolve();

    const items = await findAllByTestId('item');
    expect(addItemBtn).toBeInTheDocument();
    expect(items.length).toBe(1);
  });

  it('handles dragging and dropping items within columns', async () => {
    const { findByTestId, findAllByTestId } = render(() => <DragAndDrop columns={2} items={1} />); // Assuming you have 2 columns with 1 item

    const columns = await findAllByTestId('column');
    
    const firstColumn = columns[0];
    const secondColumn = columns[1];

    const item = await findByTestId('item', { container: firstColumn });

    const testStorage = new Map();
    testStorage.set('itemId', item);
  // Mock of the drop Event
    const testEvent = {
      dataTransfer: {
        setData: (key, value) => testStorage.set(key, value),
        getData: (key) => testStorage.get(key),
        clearData: (key) => testStorage.delete(key)
      }
    };
    
    jest.spyOn(testEvent.dataTransfer, 'getData');

    fireEvent.dragStart(item, { clientX: 0, clientY: 0, dataTransfer: testEvent.dataTransfer });
    fireEvent.dragOver(secondColumn, { clientX: 0, clientY: 0, dataTransfer: testEvent.dataTransfer});
    fireEvent.drop(secondColumn, { clientX: 0, clientY: 0, dataTransfer: testEvent.dataTransfer });
   

    const itemDragged = await findByTestId('item', { container: secondColumn });
    expect(itemDragged).toBeInTheDocument(); 
    expect(item).not.toBeInTheDocument(); 
  });
});



