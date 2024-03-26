import { createSignal, For, createEffect } from 'solid-js';

function MenuItem(props) {
  //   const [items, setItem] = createSignal([
  //     'Introduction',
  //     'Documentation',
  //     'Components',
  //   ]);
  const [items, setItems] = createSignal();
  createEffect(() => setItems(props.items));

  //   return (
  //     <div>
  //       <For each={item()}>
  //         {(item) => {
  //           console.log(item);
  //           return (
  //             <div>
  //               <h3>{props.title}</h3>
  //               <ul>
  //                 <li>{item}</li>
  //               </ul>
  //             </div>
  //           );
  //         }}
  //       </For>
  //     </div>
  //   );
  return (
    <div>
      <ul>
        <For each={items()}>
          {(item) => {
            console.log(item);
            return (
              <div>
                <h3>{props.title}</h3>
                <li>{item}</li>
              </div>
            );
          }}
        </For>
      </ul>
    </div>
  );
}

export default function Menu() {
  const intro =  ['Documentation', 'Installation'] ;
  const  components = ['Drawer ', 'Kanban Card', 'Input Form'] ;
  return (
    <div>
      <MenuItem title='Introduction' items = {intro} />
      <MenuItem title="Components" items = {components}  />
    </div>
  );
}
