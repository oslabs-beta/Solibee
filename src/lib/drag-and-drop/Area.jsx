import { createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import Column from "./Column.jsx";

export default (props) => {
  const defaultItems = {};
  const defaultColumns = {};
  let showNewColBtn = true;

  if (props.items != undefined) {
    for (let i = 0; i < props.items; i++) {
      defaultItems[i] = { itemID: i, colID: i };
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

  const updateItems = (method, payload) => {
    const { itemID } = payload;
    switch (method) {
      case "create":
        setItems({
          ...items,
          [itemIndex]: { ...payload, itemID: itemIndex, order: itemIndex },
        });
        itemIndex++;
        break;
      case "update":
        setItems(itemID, { ...items[itemID], ...payload });
        if (payload.order != undefined) {
          Object.keys(items).forEach((id) => {
            if (items[id].order >= payload.order && id != itemID) {
              setItems(id, "order", (o) => o + 1);
            }
          });
        }
        break;
      case "delete":
        setItems(itemID, undefined);
        break;
    }
  };

  const updateColumns = (method, payload) => {
    const { colID } = payload;
    switch (method) {
      case "create":
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
    <>
      <Show when={showNewColBtn == true}>
        <button
          class="m-1 rounded-md bg-slate-200 p-4 pb-2 pt-2"
          onClick={() => updateColumns("create", {})}
        >
          New Col
        </button>
      </Show>
      <div class="m-1 flex rounded-xl bg-slate-200 p-1">
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
    </>
  );
};
