// solidJS
import { Router, Route } from '@solidjs/router';
import { useContext } from 'solid-js';
import { ComponentContext } from '../context/ComponentContext';

// components
import Installation from '../components/Installation';
import Introduction from '../components/Introduction';
import Homepage from '../components/Homepage';
import ContentComponent from '../components/ContentComponent';

export default function MainContainer() {
  const { components } = useContext(ComponentContext);

  return (
    //<div class='mx-auto mb-80 flex w-10/12 max-w-3xl grow justify-center overflow-auto pt-10 xl:max-w-none'>
    <div class='m-10 flex justify-center'>
      <Router>
        <Route path='/' component={Homepage} />
        <Route path='/introduction' component={Introduction} />
        <Route path='/installation' component={Installation} />
        <For each={components}>
          {(component) => (
            <Route
              path={`/component/${component.toLowerCase().replaceAll(' ', '')}`}
              component={() => <ContentComponent component={component} />}
            />
          )}
        </For>
      </Router>
    </div>
  );
}
