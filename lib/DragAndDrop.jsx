import { createStore } from 'solid-js/store';

const DragAndDropContainer = (props) => {
  return (
    <div class='bg-slate-400 border-black border m-5 p-5 grow'>
      <p class='font-bold m-2 p-2 text-white'>{props.containerID}</p>
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
    >
      <p class='text-3xl font-bold'>
        {props.containerID} {props.itemID} {props.text}
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
    setContainers([...containers, { items: [] }]);
  }

  function addItem(containerID) {
    setContainers(containerID, 'items', (items) => {
      return [...items, { text: Math.ceil(Math.random() * 100) }];
    });
  }

  function removeItem(containerID, itemID) {
    setContainers(containerID, 'items', (items) => {
      return items.filter((item, i) => i !== itemID);
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
        <For each={containers}>
          {(container, i) => {
            return (
              <DragAndDropContainer
                containerID={i()}
                containers={containers}
                addItem={addItem}
                removeItem={removeItem}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default DragAndDrop;
