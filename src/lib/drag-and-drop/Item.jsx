import { onMount } from "solid-js";

export default (props) => {
  let ref;

  const updateCoords = () => {
    console.log("coords updating");
    const rect = ref.getBoundingClientRect();
    const y = (rect.top + rect.bottom) / 2;
    props.updateItems("update", { itemID: props.itemID, y });
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("id", props.itemID);
    props.setSelectedItem(props.itemID);
  };

  onMount(updateCoords);

  return (
    <div
      ref={ref}
      class="m-3 flex cursor-move items-center justify-between border border-black p-3"
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
      onResize={updateCoords}
      classList={{ "border-2": props.selectedItem() == props.itemID }}
    >
      {props.itemID}
      {props.items[props.itemID].y}
      <button
        class="m-1 border border-black p-1"
        onClick={() => props.updateItems("delete", { itemID: props.itemID })}
      >
        X
      </button>
    </div>
  );
};
