import { onMount, createSignal, createEffect } from 'solid-js';
import { createStore, unwrap } from 'solid-js/store';

const DragAndDropContainer = (props) => {
  function handleDragOver(containerID, bool) {
    props.setContainers(containerID, 'dragOver', bool);
  }

  return (
    <div
      class='bg-slate-400 border-black border m-5 p-5 grow'
      onDragEnter={() => handleDragOver(props.containerID, true)}
      onDragExit={() => handleDragOver(props.containerID, false)}
      classList={{ 'border-8': props.containers[props.containerID].dragOver }}
    >
      <button
        class='border font-bold m-2 p-2 bg-slate-700 text-white'
        onClick={() => props.addItem(props.containerID)}
      >
        Add New Item
      </button>
      <For each={props.containers[props.containerID].items}>
        {(item, i) => (
          <DragAndDropItem
            containerID={props.containerID}
            itemID={i()}
            containers={props.containers}
            setContainers={props.setContainers}
            removeItem={props.removeItem}
            selectedItem={props.selectedItem}
            setSelectedItem={props.setSelectedItem}
          />
        )}
      </For>
    </div>
  );
};

const DragAndDropItem = (props) => {
  function handleDrag(containerID, itemID, bool) {
    props.setContainers(containerID, 'items', itemID, 'selected', bool);
    bool
      ? props.setSelectedItem(props.containers[containerID].items[itemID])
      : props.setSelectedItem(null);
  }

  return (
    <div
      class='flex justify-between border border-black m-2 p-2'
      draggable={true}
      onDragStart={() => handleDrag(props.containerID, props.itemID, true)}
      onDragEnd={() => handleDrag(props.containerID, props.itemID, false)}
      classList={{
        'bg-slate-700':
          props.containers[props.containerID].items[props.itemID].selected,
      }}
    >
      <p class='text-3xl font-bold'>
        {props.containers[props.containerID].items[props.itemID].text}
      </p>
      <button
        class='border p-2'
        onClick={() => props.removeItem(props.containerID, props.itemID)}
      >
        X
      </button>
    </div>
  );
};

const DragAndDrop = () => {
  const [containers, setContainers] = createStore([
    { items: [{ text: 'mars', selected: false }], dragOver: false },
    {
      items: [
        { text: 'vie', selected: false },
        { text: 'hi', selected: false },
      ],
      dragOver: false,
    },
    { items: [], dragOver: false },
  ]);

  const [selectedItem, setSelectedItem] = createSignal(null);

  // adds a new container object to the containers store
  function addContainer() {
    setContainers([...containers, { items: [], dragOver: false }]);
  }

  // if item is passed in, adds item to the specified container in the containers store; otherwise, adds a new item object
  function addItem(containerID, item) {
    setContainers(containerID, 'items', (items) => {
      return item
        ? [...items, item]
        : [...items, { text: Math.ceil(Math.random() * 100), selected: false }];
    });
  }

  // removes and returns the specified item from the containers store
  function removeItem(containerID, itemID) {
    const item = containers[containerID].items[itemID];
    setContainers(containerID, 'items', (items) => {
      return items.filter((item, i) => i !== itemID);
    });
    return item;
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
        <For each={containers}>
          {(container, i) => (
            <DragAndDropContainer
              containerID={i()}
              containers={containers}
              setContainers={setContainers}
              addItem={addItem}
              removeItem={removeItem}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default DragAndDrop;
