import Item from './Item.jsx';

export default (props) => {
  const items = () => {
    return props.items.filter((item) => item.colID == props.colID);
  };
  let dragCounter = 0;
  let colRef;
  const ghostItem = <div class='border m-3 p-3'>-</div>;

  const handleDrop = (e) => {
    e.preventDefault();
    const itemID = e.dataTransfer.getData('id');
    props.updateItems('update', { itemID, colID: props.colID });
    dragCounter = 0;
    colRef.removeChild(ghostItem);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    if (++dragCounter == 1) {
      colRef.appendChild(ghostItem);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (--dragCounter <= 0) {
      colRef.removeChild(ghostItem);
    }
  };

  return (
    <div
      class='border border-black m-3 p-3'
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      ref={colRef}
    >
      <button
        class='border border-black m-3 p-3'
        onClick={() =>
          props.updateItems('create', {
            title: Math.ceil(Math.random() * 999),
            content: 'some content',
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
