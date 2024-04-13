import { createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import Column from "./Column.jsx";

//area item that takes in the following props: 
//   items:  the number of default items to display
//   columns:  the number of default columns to display
//   showNewColBtn: a boolean which displays an add new column button if set to true

export default (props) => {
  const defaultItems = {};
  const defaultColumns = {};
  let showNewColBtn = true;

  if (props.items != undefined) {
    for (let i = 0; i < props.items; i++) {
      defaultItems[i] = {
        itemID: i,
        colID: i % (props.columns || 1),
        order: i,
      };
    }
  }

  if (props.columns != undefined) {
    for (let i = 0; i < props.columns; i++) {
      defaultColumns[i] = { colID: i };
    }
  }

  if (props.showNewColBtn != undefined) showNewColBtn = props.showNewColBtn;

  let itemIndex = props.items || 0;
  let colIndex = props.columns || 0;

  const [items, setItems] = createStore(defaultItems);
  const [columns, setColumns] = createStore(defaultColumns);
  const [selectedItem, setSelectedItem] = createSignal(null);

  /**
   * A function that updates items. 
   * @function
   * @param {method} method - could be create, update, or delete
   * @param {payload} payload - an object { itemID: the id of the selectedItem, y: the y-coordinates of the item}
   */


  const updateItems = (method, payload) => {
    // console.log({ method, payload });
    const { itemID } = payload;
    switch (method) {
      case 'create':
        setItems({
          ...items,
          [itemIndex]: { ...payload, itemID: itemIndex, order: itemIndex },
        });
        itemIndex++;
        break;
      case 'update':
        setItems(itemID, { ...items[itemID], ...payload });
        if (payload.order != undefined) {
          Object.keys(items).forEach((id) => {
            if (items[id].order >= payload.order && id != itemID) {
              setItems(id, 'order', (o) => o + 1);
            }
          });
        }
        break;
      case 'delete':
        setItems(itemID, undefined);
        break;
    }
  };

  const updateColumns = (method, payload) => {
    const { colID } = payload;
    switch (method) {
      case 'create':
        setColumns({
          ...columns,
          [colIndex]: { ...payload, colID: colIndex },
        });
        colIndex++;
        break;
      // case "delete":
      //   setColumns((c) => c.filter((col) => col.colID != colID));
      //   break;
    }
  };

  return (
    <div class='flex flex-col p-2'>
      <Show when={showNewColBtn == true}>
        <button
          class='m-1 self-center justify-self-center rounded-md bg-orange-100 p-4 pb-2 pt-2'
          onClick={() => updateColumns('create', {})}
        >
          Add New Column
        </button>
      </Show>
      <div class=' flex rounded-xl bg-slate-100 p-1 '>
        <For each={Object.keys(columns)}>
          {(colID) => (
            <Column
              colID={colID}
              items={items}
              updateItems={updateItems}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          )}
        </For>
      </div>
    </div>
  );
};
