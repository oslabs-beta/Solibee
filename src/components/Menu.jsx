import { createSignal, For, createEffect } from 'solid-js';

function MenuItem(props) {
  //   const [items, setItem] = createSignal([
  //     'Introduction',
  //     'Documentation',
  //     'Components',
  //   ]);
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
                <a class="block rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200 cursor-pointer">{item}</a>
              </div>
            );
          }}
        </For>
      </ul>
    </div>
  );
}

export default function Menu() {
  const  components = ['Drawer ', 'Kanban Card', 'Input Form'] ; // get components from db if we set up and store them in db;
  return (
    <div class=" hidden h-4/5 w-52 overflow-y-auto px-4 pb-4 scrollbar-thin md:block">
      <nav class="m-3">
        <div class="flex flex-col mt-3 mb-3">
          <p class="font-bold text-orange-200 my-3">Getting Started</p>
          <a class="block rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200 cursor-pointer" href='/introduction'>Introduction</a>
          <a class="block rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200 cursor-pointer" href='/docs'>Documentation</a>
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
