import { onMount, createEffect, createUniqueId } from "solid-js";

export default (props) => {
  let ref;

  createEffect(() => {
    const rect = ref.getBoundingClientRect();
    const y = (rect.top + rect.bottom) / 2;
    props.updateItems("update", { itemID: props.itemID, y });
  });

  const handleDragStart = (e) => {
    e.dataTransfer.setData("id", props.itemID);
    props.setSelectedItem(props.itemID);
  };

  return (
    <div
      ref={ref}
      class="m-2 flex cursor-move items-center justify-between rounded-xl bg-slate-200 p-4 pb-2 pt-2"
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
      classList={{ "border-2 shadow": props.selectedItem() == props.itemID }}
    >
      {props.itemID}
      {/* {props.items[props.itemID].y} */}
      <button
        class="ml-2 rounded-full bg-slate-600 p-1 text-xs font-bold text-slate-50"
        onClick={() => props.updateItems("delete", { itemID: props.itemID })}
      >
        X
      </button>
    </div>
  );
};
