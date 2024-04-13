import { createSignal } from "solid-js";
import Item from "./Item.jsx";

export default (props) => {
  const [closestItemID, setClosestItemID] = createSignal(null);

  const closestItemReorderingIndex = () => {
    if (closestItemID() == null) return 0;
    return props.items[closestItemID()].order + 1;
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();

    const itemID = e.dataTransfer.getData("id");

    setClosestItemID(
      Object.keys(props.items)
        .filter((itemID) => props.items[itemID].colID == props.colID)
        .reduce((a, b) => {
          if (props.items[b].itemID == itemID) return a;
          const bDistance = e.clientY - props.items[b].y;
          if (bDistance < 0) return a;
          if (!a) return b;
          const aDistance = e.clientY - props.items[a].y;
          if (bDistance < aDistance) return b;
        }, null),
    );

    props.updateItems("update", {
      itemID,
      colID: props.colID,
      order: closestItemReorderingIndex(),
    });
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    props.setSelectedItem(null);
  };

  return (
    <div
      class='m-3 flex min-h-72 flex-col items-center justify-start rounded-xl border-2 border-orange-100 bg-slate-100 p-1'
      onDragEnter={(e) => handleDragEnter(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <button
        class='m-4 rounded-md bg-orange-100 p-2 px-4 pb-1 pt-1'
        onClick={() =>
          props.updateItems('create', {
            title: null,
            content: null,
            colID: props.colID,
          })
        }
      >
        New Item
      </button>
      <For
        each={Object.keys(props.items)
          .filter((itemID) => props.items[itemID].colID == props.colID)
          .sort((a, b) => props.items[a].order > props.items[b].order)}
      >
        {(itemID) => (
          <Item itemID={itemID} closestItemID={closestItemID} {...props} />
        )}
      </For>
    </div>
  );
};
