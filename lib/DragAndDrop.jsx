import { createStore } from 'solid-js/store';

const DragAndDropContainer = (props) => {
  const addItem = (id) => {
    props.setStore('containers', id, 'items', (items) => [
      ...items,
      'new item',
    ]);
    props.setStore('containers', id, 'index', (index) => index + 1);
  };
  };

  return (
    <div class='bg-slate-400 border-black border m-5 p-5 grow'>
      <p class='font-bold m-2 p-2 text-white'>{props.id}</p>
      <button
        class='border font-bold m-2 p-2 bg-slate-700 text-white'
        onClick={() => addItem(props.id)}
      >
        Add New Item
      </button>
      <For each={props.store.containers[props.id].items}>
        {(item, i) => <DragAndDropItem id={i()} name={item} />}
      </For>
    </div>
  );
};

const DragAndDropItem = (props) => {
  return (
    <div class='border border-black m-2 p-2' draggable={true}>
      <p class='text-3xl font-bold'>
        {props.id} {props.name}
      </p>
    </div>
  );
};

const DragAndDrop = () => {
  const [store, setStore] = createStore({
    index: 2,
    containers: [
      { index: 0, items: ['first item', 'second item'] },
      { index: 0, items: ['a third item', 'another item', 'last item'] },
    ],
  });

  const addContainer = () =>
    setStore((store) => {
      const index = store.index + 1;
      const containers = [...store.containers, { index: 0, items: [] }];
      return { index, containers };
    });

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
          {(container, i) => (
            <DragAndDropContainer id={i()} store={store} setStore={setStore} />
          )}
        </For>
      </div>
    </div>
  );
};

export default DragAndDrop;
