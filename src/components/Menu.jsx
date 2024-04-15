import { createSignal, For, createEffect } from "solid-js";
import { Router, Route, A } from "@solidjs/router";
import { useContext } from "solid-js";
import { ComponentContext } from "../context/ComponentContext";

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
                <a
                  class="block cursor-pointer rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200/50"
                  href={"/component/" + item.toLowerCase().replaceAll(" ", "")}
                >
                  {item}
                </a>
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
    <div class="scrollbar-thin bg-background/50 sticky top-20 m-5 mt-10 hidden h-full w-52 overflow-y-auto rounded-md px-4 pb-4 shadow-md backdrop-blur-sm md:block">
      <nav class="m-3 ">
        <div class="mb-3 mt-3 flex flex-col">
          <p class="text-boldfont my-3 font-bold">Getting Started</p>
          <a
            class="block cursor-pointer rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200/50"
            href="/introduction"
          >
            Introduction
          </a>
          <a
            class="block cursor-pointer rounded-lg px-4 py-2 transition-colors duration-75 hover:bg-orange-200/50"
            href="/installation"
          >
            Installation
          </a>
        </div>
        <div class="mb-3 mt-3">
          <p class="text-boldfont my-3 font-bold">Components</p>
          <MenuItem items={components} />
        </div>
      </nav>
    </div>
  );
}
