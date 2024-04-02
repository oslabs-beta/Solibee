import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

export const Area = (props) => {
  const [itemIndex, setItemIndex] = createSignal(0);
  const [colIndex, setColIndex] = createSignal(0);
  const [items, setItems] = createStore([]);
  const columns = () => {
    const c = [];
    for (let i = 0; i < colIndex(); i++) c.push({});
    return c;
  };

  // TODO: fix itemIDs so that they re-assign IDs on move?
  // TODO: make columns a real store
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
        <For each={columns()}>
          {(col, i) => (
            <Column colID={i()} items={items} updateItems={updateItems} />
          )}
        </For>
      </div>
    </>
  );
};

export const Column = (props) => {
  const items = () => {
    return props.items.filter((item) => item.colID == props.colID);
  };

  const handleDrop = (e) => {
    console.log('dropping');
    e.preventDefault();
    const itemID = e.dataTransfer.getData('id');
    props.updateItems('update', { itemID, colID: props.colID });
  };

  return (
    <div
      class='border border-black m-3 p-3'
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      column
      <button
        class='border border-black m-3 p-3'
        onClick={() =>
          props.updateItems('create', {
            title: 'new item',
            content: 'some content',
            colID: props.colID,
          })
        }
      >
        New Item
      </button>
      <For each={items()}>
        {(item) => <Item itemID={item.itemID} {...props} />}
      </For>
    </div>
  );
};

export const Item = (props) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('id', props.itemID);
  };

  return (
    <div
      class='border border-black m-3 p-3 cursor-move'
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
    >
      item {props.itemID}
    </div>
  );
};
