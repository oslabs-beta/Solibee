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
              <li>
                <a
                  class='block cursor-pointer rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200'
                  href={'/component/' + item.toLowerCase().replaceAll(' ', '')}
                >
                  {item}
                </a>
              </li>
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
    <div class='scrollbar-thin sticky top-20 m-5 mt-10 hidden h-full w-52 overflow-y-auto rounded-md bg-white/30 px-4 pb-4 shadow-md backdrop-blur-sm md:block'>
      <nav aria-label = 'documentation and component navigation' class='m-3 '>
        <div class='mb-3 mt-3 flex flex-col'>
          <p class='my-3 font-bold text-orange-200'>Getting Started</p>
          <a
            class='block cursor-pointer rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200'
            href='/introduction'
          >
            Introduction
          </a>
          <a
            class='block cursor-pointer rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200'
            href='/installation'
          >
            Installation
          </a>
        </div>
        <div class='mb-3 mt-3'>
          <p class='my-3 font-bold text-orange-200'>Components</p>
          <MenuItem items={components} />
        </div>
      </nav>
    </div>
  );
}
