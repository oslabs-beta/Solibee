import { onMount } from 'solid-js';

export default (props) => {
  let ref;

  onMount(() => {
    const rect = ref.getBoundingClientRect();
    const y = (rect.top + rect.bottom) / 2;
    props.setItemLocations({ ...props.itemLocations, [props.itemID]: y });
  });

  const handleDragStart = (e) => {
    e.dataTransfer.setData('id', props.itemID);
  };

  return (
    <div
      ref={ref}
      class='border border-black m-3 p-3 cursor-move flex justify-between items-center'
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
    >
      {props.items.filter((i) => i.itemID == props.itemID)[0].title}{' '}
      {props.itemID}
      <button
        class='border border-black m-1 p-1'
        onClick={() => props.updateItems('delete', { itemID: props.itemID })}
      >
        X
      </button>
    </div>
  );
};
