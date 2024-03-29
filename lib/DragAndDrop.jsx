import { createStore } from 'solid-js/store';

const DragAndDropContainer = (props) => {
  return (
    <div
      class='bg-slate-400 border-black border m-5 p-5 grow'
      classList={{
        'bg-slate-200': props.containers[props.containerID].dragOver == true,
      }}
    >
      {/* <p class='font-bold m-2 p-2 text-white'>{props.containerID}</p> */}
      <button
        class='border font-bold m-2 p-2 bg-slate-700 text-white'
        onClick={() => props.addItem(props.containerID)}
      >
        Add New Item
      </button>
      <For each={props.containers[props.containerID].items}>
        {(item, i) => {
          return (
            <DragAndDropItem
              itemID={i()}
              containerID={props.containerID}
              text={item.text}
              containers={props.containers}
              removeItem={props.removeItem}
              toggleSelected={props.toggleSelected}
            />
          );
        }}
      </For>
    </div>
  );
};

const DragAndDropItem = (props) => {
  return (
    <div
      class='flex justify-between border border-black m-2 p-2'
      draggable={true}
      onDragStart={() => props.toggleSelected(props.containerID, props.itemID)}
      onDragEnd={() => props.toggleSelected(props.containerID, props.itemID)}
      classList={{
        'bg-slate-600':
          props.containers[props.containerID].items[props.itemID].selected ==
          true,
      }}
    >
      <p class='text-3xl font-bold'>
        {/* {props.containerID} {props.itemID}  */}
        {props.text}
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
  const [containers, setContainers] = createStore([]);

  function addContainer() {
    setContainers([...containers, { items: [], dragOver: false }]);
  }

  function addItem(containerID) {
    setContainers(containerID, 'items', (items) => {
      return [
        ...items,
        { text: Math.ceil(Math.random() * 100), selected: false },
      ];
    });
  }

  function removeItem(containerID, itemID) {
    setContainers(containerID, 'items', (items) => {
      return items.filter((item, i) => i !== itemID);
    });
  }

  function toggleSelected(containerID, itemID) {
    setContainers(containerID, 'items', itemID, 'selected', (s) => !s);
  }

  function toggleDragOver(containerID) {
    setContainers(containerID, 'dragOver', (d) => !d);
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
          {(container, i) => {
            return (
              <DragAndDropContainer
                containerID={i()}
                containers={containers}
                addItem={addItem}
                removeItem={removeItem}
                toggleSelected={toggleSelected}
                toggleDragOver={toggleDragOver}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default DragAndDrop;
