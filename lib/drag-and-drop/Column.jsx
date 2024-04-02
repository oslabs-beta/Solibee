import { createSignal } from "solid-js";
import Item from "./Item.jsx";

export default (props) => {
  const [closestItem, setClosestItem] = createSignal(null);

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
    items().forEach((item) => {
      if (
        closestItem() == null ||
        Math.abs(e.clientY - props.itemLocations[item.itemID]) <
          Math.abs(e.clientY - props.itemLocations[closestItem()])
      ) {
        setClosestItem(item.itemID);
      }
    });
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (--dragCounter <= 0) {
      ref.removeChild(ghostItem);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const itemID = e.dataTransfer.getData("id");
    props.updateItems("update", { itemID, colID: props.colID });
    dragCounter = 0;
    ref.removeChild(ghostItem);
  };

  return (
    <div
      ref={ref}
      class="m-3 border border-black p-3"
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
    >
      <button
        class="m-3 border border-black p-3"
        onClick={() =>
          props.updateItems("create", {
            title: Math.ceil(Math.random() * 999),
            content: "some content",
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
