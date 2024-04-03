import { createSignal, For, createEffect } from 'solid-js';
import { Router, Route, A } from '@solidjs/router';
import { useContext } from 'solid-js';
import { ComponentContext } from '../context/ComponentContext'; 

function MenuItem(props) {

  const [items, setItems] = createSignal();
  createEffect(() => setItems(props.items));

  return (
    <div>
      <ul>
        <For each={items()}>
          {(item) => {
            console.log(item);
            return (
              <div>
                <a class="block rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200 cursor-pointer" href={"/component/" + item.toLowerCase().replace(' ', '')}>{item}</a>
              </div>
            );
          }}
        </For>
      </ul>
    </div>
  );
}

export default function Menu() {

  const { components } = useContext(ComponentContext); // get components from db if we set up and store them in db;
  
  return (
    <div class="sticky top-20 hidden m-5 backdrop-blur-sm bg-white/30 shadow-md rounded-md h-full w-52 overflow-y-auto px-4 pb-4 scrollbar-thin md:block">
      <nav class="m-3 ">
        <div class="flex flex-col mt-3 mb-3">
          <p class="font-bold text-orange-200 my-3">Getting Started</p>
          <a class="block rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200 cursor-pointer" href='/introduction'>Introduction</a>
          <a class="block rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200 cursor-pointer" href='/installation'>Installation</a>
        </div>
        <div class="mt-3 mb-3">
          <p class="font-bold text-orange-200 my-3">Components</p>
          <MenuItem items = {components}  />
        </div>
      </nav>
    </div>
  );
}
