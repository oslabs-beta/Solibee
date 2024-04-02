import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import Column from './Column.jsx';

export default (props) => {
  const [itemIndex, setItemIndex] = createSignal(0);
  const [colIndex, setColIndex] = createSignal(0);
  const [items, setItems] = createStore([]);
  const [columns, setColumns] = createStore([]);
  const [itemLocations, setItemLocations] = createStore({});

  const updateItems = (method, payload) => {
    const { itemID } = payload;
    switch (method) {
      case 'create':
        console.log('creating new item');
        const newItem = { ...payload, itemID: itemIndex() };
        setItems([...items, newItem]);
        setItemIndex((i) => i + 1);
        break;
      case 'update':
        console.log('updating item');
        setItems(
          items.map((item) =>
            item.itemID == itemID ? { ...item, ...payload } : item
          )
        );
        break;
      case 'delete':
        console.log('removing item');
        setItems((i) => i.filter((item) => item.itemID != itemID));
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
        <For each={columns}>
          {(col) => (
            <Column
              colID={col.colID}
              items={items}
              updateItems={updateItems}
              itemLocations={itemLocations}
              setItemLocations={setItemLocations}
            />
          )}
        </For>
      </div>
    </>
  );
};
