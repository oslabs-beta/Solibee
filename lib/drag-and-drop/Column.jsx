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
          const bDistance =
            e.clientY - props.itemYCoords[props.items[b].itemID];
          if (bDistance < 0) return a;
          if (!a) return b;
          const aDistance =
            e.clientY - props.itemYCoords[props.items[a].itemID];
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
  };

  return (
    <div
      // ref={ref}
      class="m-3 border border-black p-3"
      onDragEnter={(e) => handleDragEnter(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <button
        class="m-3 border border-black p-3"
        onClick={() =>
          props.updateItems("create", {
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
