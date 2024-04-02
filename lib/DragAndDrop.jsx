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
  // TODO: make new function updateColumns
  // TODO: add CRUD method
  const updateItems = (payload, remove = false) => {
    const { colID, itemID } = payload;
    if (remove) {
      console.log('removing item');
      const updatedItems = [...items].filter((item) => item.itemID != itemID);
      setItems(updatedItems);
    } else if (itemID != undefined) {
      console.log('updating item');
      setItems(itemID, { ...payload });
    } else if (colID != undefined) {
      console.log('creating new item');
      const newItem = { ...payload, itemID: itemIndex() };
      setItems([...items, newItem]);
      setItemIndex((i) => i + 1);
    } else {
      console.log('creating new column');
      setColIndex((i) => i + 1);
    }
  };

  return (
    <>
      <button
        class='border border-black m-3 p-3'
        onClick={() => {
          updateItems({ title: 'new item', content: 'new content' });
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
    props.updateItems({ itemID, colID: props.colID });
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
          props.updateItems({
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
