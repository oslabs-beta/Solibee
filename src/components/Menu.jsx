// solidJS
import { createSignal, For, createEffect } from 'solid-js';
import { useContext } from 'solid-js';
import { ComponentContext } from '../context/ComponentContext';

function MenuItem(props) {
  const [items, setItems] = createSignal();
  createEffect(() => setItems(props.items));

  return (
    <ul>
      <For each={items()}>
        {(item) => {
          console.log(item);
          return (
            <li>
              <a
                class='block cursor-pointer rounded-lg p-2 px-3 transition-colors duration-75 hover:bg-orange-200'
                href={'/component/' + item.toLowerCase().replaceAll(' ', '')}
              >
                {item}
              </a>
            </li>
          );
        }}
      </For>
    </ul>
  );
}

export default function Menu() {
  const { components } = useContext(ComponentContext); // get components from db if we set up and store them in db;

  return (
    <div class='sticky top-28 mx-5 hidden h-full w-52 px-3 backdrop-blur-sm md:block'>
      <ul>
        <li class='mb-3 px-3 font-bold text-orange-200'>Getting Started</li>
        <li>
          <a
            class='block cursor-pointer rounded-lg p-2 px-3 transition-colors duration-75 hover:bg-orange-200'
            href='/introduction'
          >
            Introduction
          </a>
        </li>
        <li>
          <a
            class='block cursor-pointer rounded-lg p-2 px-3 transition-colors duration-75 hover:bg-orange-200'
            href='/installation'
          >
            Installation
          </a>
        </li>
        <li class='my-3 px-3 font-bold text-orange-200'>Components</li>
        <MenuItem items={components} />
      </ul>
    </div>
  );
}
