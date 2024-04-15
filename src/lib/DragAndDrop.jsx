import { createEffect, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

//area item that takes in the following props:
//   items:  the number of default items to display
//   columns:  the number of default columns to display
//   showNewColBtn: a boolean which displays an add new column button if set to true

const Area = (props) => {
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

const Column = (props) => {
  const [closestItemID, setClosestItemID] = createSignal(null);

  const closestItemReorderingIndex = () => {
    if (closestItemID() == null) return 0;
    return props.items[closestItemID()].order + 1;
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();

    const itemID = e.dataTransfer.getData('id');

    setClosestItemID(
      Object.keys(props.items)
        .filter((itemID) => props.items[itemID].colID == props.colID)
        .reduce((a, b) => {
          if (props.items[b].itemID == itemID) return a;
          const bDistance = e.clientY - props.items[b].y;
          if (bDistance < 0) return a;
          if (!a) return b;
          const aDistance = e.clientY - props.items[a].y;
          if (bDistance < aDistance) return b;
        }, null),
    );

    props.updateItems('update', {
      itemID,
      colID: props.colID,
      order: closestItemReorderingIndex(),
    });
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    props.setSelectedItem(null);
  };

  return (
    <div
      class='m-3 flex min-h-72 flex-col items-center justify-start rounded-xl border-2 border-orange-100 bg-slate-100 p-1'
      onDragEnter={(e) => handleDragEnter(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <button
        class='m-4 rounded-md bg-orange-100 p-2 px-4 pb-1 pt-1'
        onClick={() =>
          props.updateItems('create', {
            title: null,
            content: null,
            colID: props.colID,
          })
        }
      >
        New Item
      </button>
      <For
        each={Object.keys(props.items)
          .filter((itemID) => props.items[itemID].colID == props.colID)
          .sort((a, b) => props.items[a].order > props.items[b].order)}
      >
        {(itemID) => (
          <Item itemID={itemID} closestItemID={closestItemID} {...props} />
        )}
      </For>
    </div>
  );
};

const Item = (props) => {
  let ref;

  //why do we need this function?

  createEffect(() => {
    const rect = ref.getBoundingClientRect();
    console.log({ rect });
    const y = (rect.top + rect.bottom) / 2;
    props.updateItems('update', { itemID: props.itemID, y });
  });

  const handleDragStart = (e) => {
    e.dataTransfer.setData('id', props.itemID);
    props.setSelectedItem(props.itemID);
  };

  return (
    <div
      ref={ref}
      class='m-2 flex w-4/5 cursor-move items-center justify-between rounded-md bg-white pb-2 pl-4 pr-2 pt-2 text-sm'
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
      classList={{ shadow: props.selectedItem() == props.itemID }}
    >
      {`Item ${props.itemID}`}
      {/* {props.itemID} */}
      {/* {props.items[props.itemID].y} */}

      {/* <button
        class='bg-orange-100 text-xs size-4 rounded-md text-white'
        onClick={() => props.updateItems('delete', { itemID: props.itemID })}
      >
        X
      </button> */}
      <button
        aria-label='delete item'
        aria-roledescription='click to delete the item from current column'
        class='flex size-4 items-center justify-center rounded-md bg-orange-200 text-white focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50'
        onClick={() => props.updateItems('delete', { itemID: props.itemID })}
      >
        <svg
          class='size-3'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </div>
  );
};

export default Area;
