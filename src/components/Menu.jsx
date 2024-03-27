import { createSignal, For, createEffect } from 'solid-js';

function MenuItem(props) {

  const [items, setItems] = createSignal();
  createEffect(() => setItems(props.items));

  return (
    <div>
      <h3 class="font-bold">{props.title}</h3>
      <ul class="mx-2.5">
        <For each={items()}>{(item) => <li>{item}</li>}</For>
      </ul>
    </div>
  );
}

export default function Menu() {
  const intro = ['Documentation', 'Installation'];
  const components = ['Drawer ', 'Kanban Card', 'Input Form'];
  return (
    <div>
      <MenuItem title="Getting Started" items={intro} />
      <MenuItem title="Components" items={components} />
    </div>
  );
}
