import { createSignal } from "solid-js";
import Item from "./Item.jsx";

export default (props) => {
  const [closestItem, setClosestItem] = createSignal(null);

  const closestIndex = () => {
    if (!closestItem()) return 0;
    for (let i = 0; i < items().length; i++) {
      if (items()[i].itemID == closestItem().itemID) return i;
    }
  };

  let ref;
  let dragCounter = 0;
  const ghostItem = <div class="m-3 border p-3">-</div>;

  const items = () => {
    return props.items.filter((item) => item.colID == props.colID);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    if (++dragCounter == 1) {
      ref.appendChild(ghostItem);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();

    setClosestItem(
      items().reduce((a, b) => {
        const bDistance = e.clientY - props.itemYCoords[b.itemID];
        if (bDistance < 0) return a;
        if (!a) return b;
        const aDistance = e.clientY - props.itemYCoords[a.itemID];
        if (bDistance < aDistance) return b;
      }, null),
    );
    // near ? console.log(near.itemID) : console.log(near);
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
      <For each={items()}>
        {(item) => <Item itemID={item.itemID} {...props} />}
      </For>
    </div>
  );
};
