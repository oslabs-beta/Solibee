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
      class="m-2 flex w-4/5 cursor-move items-center justify-between rounded-xl bg-slate-200 pb-2 pl-4 pr-2 pt-2 text-sm"
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
      classList={{ shadow: props.selectedItem() == props.itemID }}
    >
      {`Item ${props.itemID}`}
      {/* {props.itemID} */}
      {/* {props.items[props.itemID].y} */}
      <button
        class="ml-2 w-6 rounded-full bg-slate-300 p-1 text-xs font-bold"
        onClick={() => props.updateItems("delete", { itemID: props.itemID })}
      >
        X
      </button>
    </div>
  );
};
