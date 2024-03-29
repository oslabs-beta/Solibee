import { createStore } from 'solid-js/store';

const DragAndDropContainer = (props) => {
  function addItem(containerID) {
    props.setStore('containers', containerID, 'items', (items) => {
      return [...items, 'new item'];
    });
    props.setStore('containers', containerID, 'index', (index) => {
      return index + 1;
    });
  }

  return (
    <div class='bg-slate-400 border-black border m-5 p-5 grow'>
      <p class='font-bold m-2 p-2 text-white'>{props.containerID}</p>
      <button
        class='border font-bold m-2 p-2 bg-slate-700 text-white'
        onClick={() => addItem(props.containerID)}
      >
        Add New Item
      </button>
      <For each={props.store.containers[props.containerID].items}>
        {(item, i) => {
          return (
            <DragAndDropItem
              itemID={i()}
              containerID={props.containerID}
              text={item.text}
              store={props.store}
              setStore={props.setStore}
            />
          );
        }}
      </For>
    </div>
  );
};

const DragAndDropItem = (props) => {
  function removeItem(containerID, itemID) {
    props.setStore('containers', containerID, 'items', (items) => {
      return items.filter((item, i) => i !== itemID);
    });
    props.setStore('containers', containerID, 'index', (index) => {
      return index - 1;
    });
  }

  return (
    <div
      class='flex justify-between border border-black m-2 p-2'
      draggable={true}
    >
      <p class='text-3xl font-bold'>
        {props.containerID} {props.itemID} {props.text}
      </p>
      <button
        class='border p-2'
        onClick={() => removeItem(props.containerID, props.itemID)}
      >
        X
      </button>
    </div>
  );
};

const DragAndDrop = () => {
  const [store, setStore] = createStore({
    index: 2,
    containers: [
      // { index: 0, items: [{ text: 'first item' }, { text: 'second item' }] },
      // {
      //   index: 0,
      //   items: [
      //     { text: 'a third item' },
      //     { text: 'another item' },
      //     { text: 'last item' },
      //   ],
      // },
    ],
  });

  function addContainer() {
    setStore((store) => {
      const index = store.index + 1;
      const containers = [...store.containers, { index: 0, items: [] }];
      return { index, containers };
    });
  }

  return (
    <div>
      <button
        class='border text-3xl font-bold m-2 p-2 bg-slate-700 text-white'
        onClick={addContainer}
      >
        Add New Container
      </button>
      <div class='grid grid-cols-3'>
        <For each={store.containers}>
          {(container, i) => {
            return (
              <DragAndDropContainer
                containerID={i()}
                store={store}
                setStore={setStore}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default DragAndDrop;
