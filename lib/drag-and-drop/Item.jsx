import { onMount } from "solid-js";

export default (props) => {
  let ref;

  const updateCoords = () => {
    const rect = ref.getBoundingClientRect();
    const y = (rect.top + rect.bottom) / 2;
    props.itemYCoords[props.itemID] = y;
  };

  onMount(updateCoords);

  return (
    <div
      ref={ref}
      class="m-3 flex cursor-move items-center justify-between border border-black p-3"
      draggable={true}
      onDragStart={(e) => e.dataTransfer.setData("id", props.itemID)}
      onResize={updateCoords}
    >
      {props.itemID}
      <button
        class="m-1 border border-black p-1"
        onClick={() => props.updateItems("delete", { itemID: props.itemID })}
      >
        X
      </button>
    </div>
  );
};
