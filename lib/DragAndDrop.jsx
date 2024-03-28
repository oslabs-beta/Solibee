import { createSignal } from 'solid-js';

const DragAndDropContainer = () => {
  // const [getString, setString] = createSignal('~mySignalString~');

  return (
    <div class='bg-slate-400 border-black border m-5 p-5 grow'>
      <DragAndDropItem />
      <DragAndDropItem />
      <DragAndDropItem />
    </div>
  );
};

const DragAndDropItem = () => {
  return (
    <div class='border border-black m-2 p-2'>
      <p class='text-3xl font-bold'>item </p>
    </div>
  );
};

const DragAndDrop = () => {
  // const [containers, setContainers] = createStore([]);

  return (
    <div class='flex'>
      <DragAndDropContainer />
      <DragAndDropContainer />
    </div>
  );
};

export default DragAndDrop;
