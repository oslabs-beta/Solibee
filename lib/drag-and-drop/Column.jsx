import Item from './Item.jsx';

export default (props) => {
  const items = () => {
    return props.items.filter((item) => item.colID == props.colID);
  };

  const handleDrop = (e) => {
    console.log('dropping');
    e.preventDefault();
    const itemID = e.dataTransfer.getData('id');
    props.updateItems('update', { itemID, colID: props.colID });
  };

  return (
    <div
      class='border border-black m-3 p-3'
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      column
      <button
        class='border border-black m-3 p-3'
        onClick={() =>
          props.updateItems('create', {
            title: 'new item',
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
