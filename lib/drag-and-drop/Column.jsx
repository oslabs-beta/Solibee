import { createSignal } from "solid-js";
import Item from "./Item.jsx";

export default (props) => {
  const [closestItem, setClosestItem] = createSignal(null);

  let ref;
  let dragCounter = 0;
  const ghostItem = <div class="m-3 border p-3">-</div>;

  const handleDragEnter = (e) => {
    e.preventDefault();
    if (++dragCounter == 1) {
      ref.appendChild(ghostItem);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();

    setClosestItem(
      Object.keys(props.items)
        .filter((itemID) => props.items[itemID].colID == props.colID)
        .reduce((a, b) => {
          const bDistance =
            e.clientY - props.itemYCoords[props.items[b].itemID];
          if (bDistance < 0) return a;
          if (!a) return b;
          const aDistance =
            e.clientY - props.itemYCoords[props.items[a].itemID];
          if (bDistance < aDistance) return b;
        }, null),
    );

    console.log(closestItem());
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (--dragCounter <= 0) {
      ref.removeChild(ghostItem);
      setClosestItem(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const itemID = e.dataTransfer.getData("id");
    props.updateItems("update", { itemID, colID: props.colID });
    dragCounter = 0;
    ref.removeChild(ghostItem);
    setClosestItem(null);
  };

  return (
    <div
      ref={ref}
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
        each={Object.keys(props.items).filter(
          (itemID) => props.items[itemID].colID == props.colID,
        )}
      >
        {(itemID) => <Item itemID={itemID} {...props} />}
      </For>
    </div>
  );
};
