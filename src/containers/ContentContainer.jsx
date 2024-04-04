import { createSignal, For, createEffect } from "solid-js";
import { Router, Route } from "@solidjs/router";
import Installation from "../components/Installation";
import Introduction from "../components/Introduction";
import ContentComponent from "../components/ContentComponent";
import { useContext } from "solid-js";
import { ComponentContext } from "../context/ComponentContext";

export default function ContentContainer() {
  const { components } = useContext(ComponentContext);

  return (
    // added margin bottom here
    <div class="mx-auto mb-80 w-10/12 max-w-3xl overflow-auto pt-10 xl:max-w-none">
      <Router>
        <Route path="/installation" component={Installation} />
        <Route path="/introduction" component={Introduction} />
        <For each={components}>
          {(component) => (
            <Route
              path={`/component/${component.toLowerCase().replace(" ", "")}`}
              component={() => <ContentComponent component={component} />}
            />
          )}
        </For>
      </Router>
    </div>
  );
}
