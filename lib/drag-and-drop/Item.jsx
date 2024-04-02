export default (props) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('id', props.itemID);
  };

  return (
    <div
      class='border border-black m-3 p-3 cursor-move flex justify-between items-center'
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
    >
      {props.items.filter((i) => i.itemID == props.itemID)[0].title}{' '}
      {props.itemID}
      <button
        class='border border-black m-1 p-1'
        onClick={() => props.updateItems('delete', { itemID: props.itemID })}
      >
        X
      </button>
    </div>
  );
};
