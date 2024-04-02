import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import Column from './Column.jsx';

export default (props) => {
  const [itemIndex, setItemIndex] = createSignal(0);
  const [colIndex, setColIndex] = createSignal(0);
  const [items, setItems] = createStore([]);
  const [columns, setColumns] = createStore([]);

  // TODO: fix itemIDs so that they re-assign IDs on move?
  const updateItems = (method, payload) => {
    const { itemID } = payload;
    switch (method) {
      case 'create':
        console.log('creating new item');
        const newItem = { ...payload, itemID: itemIndex() };
        setItems([...items, newItem]);
        setItemIndex((i) => i + 1);
        break;
      case 'read':
        // code
        break;
      case 'update':
        console.log('updating item');
        setItems(itemID, { ...payload });
        break;
      case 'delete':
        console.log('removing item');
        const updatedItems = [...items].filter((item) => item.itemID != itemID);
        setItems(updatedItems);
        break;
      default:
      // code
    }
  };

  const updateColumns = (method, payload) => {
    const { colID } = payload;
    switch (method) {
      case 'create':
        console.log('creating new column');
        const newCol = { ...payload, colID: colIndex() };
        setColumns([...columns, newCol]);
        setColIndex((i) => i + 1);
        break;
      case 'read':
        // code
        break;
      case 'update':
        // code
        break;
      case 'delete':
        // code
        break;
      default:
      // code
    }
  };

  return (
    <>
      <button
        class='border border-black m-3 p-3'
        onClick={() => {
          updateColumns('create', {
            title: 'new item',
            content: 'new content',
          });
        }}
      >
        New Col
      </button>
      <div class='border border-black m-3 p-3 flex'>
        area
        <For each={columns}>
          {(col, i) => (
            <Column colID={i()} items={items} updateItems={updateItems} />
          )}
        </For>
      </div>
    </>
  );
};
