import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import Column from "./Column.jsx";

export default (props) => {
  let itemIndex = 0;
  let colIndex = 0;
  let itemYCoords = {};
  const [items, setItems] = createStore([]);
  const [columns, setColumns] = createStore({});
  const colComponents = [];

  const updateItems = (method, payload) => {
    const { itemID } = payload;
    switch (method) {
      case "create":
        const newItem = { ...payload, itemID: itemIndex++ };
        setItems([...items, newItem]);
        break;
      case "update":
        setItems(
          items.map((item) =>
            item.itemID == itemID ? { ...item, ...payload } : item,
          ),
        );
        break;
      case "delete":
        setItems((i) => i.filter((item) => item.itemID != itemID));
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
      <button
        class="m-3 border border-black p-3"
        onClick={() => updateColumns("create", {})}
      >
        New Col
      </button>
      <div class="m-3 flex border border-black p-3">
        <For each={Object.keys(columns)}>
          {(colID) => (
            <Column
              colID={colID}
              items={items}
              updateItems={updateItems}
              itemYCoords={itemYCoords}
            />
          )}
        </For>
      </div>
    </>
  );
};
