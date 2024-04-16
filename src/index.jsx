/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import './index.css';
import App from './App';
import { CompContextProvider } from './context/ComponentContext';
import { StrContextProvider } from './context/StrRepresentationContext';
import { TailwindConfigContextProvider } from './context/TailwindConfigContext';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <TailwindConfigContextProvider>
      <CompContextProvider>
        <StrContextProvider>
          <App />
        </StrContextProvider>
      </CompContextProvider>
    </TailwindConfigContextProvider>
  ),
  root,
);
