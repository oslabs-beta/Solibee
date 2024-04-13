import { onMount, createEffect, createUniqueId } from 'solid-js';

export default (props) => {
  let ref;
 
  console.log('I am props in Item.jsx', props);

  //why do we need this function? 

  createEffect(() => {
    const rect = ref.getBoundingClientRect();
    console.log({rect});
    const y = (rect.top + rect.bottom) / 2;
    props.updateItems('update', { itemID: props.itemID, y });
  });

  const handleDragStart = (e) => {
    
    e.dataTransfer.setData('id', props.itemID);
    props.setSelectedItem(props.itemID);

  };

  return (
    <div
      ref={ref}
      class='m-2 flex w-4/5 cursor-move items-center justify-between rounded-md bg-white pb-2 pl-4 pr-2 pt-2 text-sm'
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
      classList={{ shadow: props.selectedItem() == props.itemID }}
    >
      {`Item ${props.itemID}`}
      {/* {props.itemID} */}
      {/* {props.items[props.itemID].y} */}
     
      {/* <button
        class='bg-orange-100 text-xs size-4 rounded-md text-white'
        onClick={() => props.updateItems('delete', { itemID: props.itemID })}
      >
        X
      </button> */}
      <button
        aria-label='delete item'
        aria-roledescription='click to delete the item from current column'
        class='flex size-4 items-center justify-center rounded-md bg-orange-200 text-white focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50'
        onClick={() => props.updateItems('delete', { itemID: props.itemID })}
      >
        <svg
          class='size-3'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </div>
  );
};
