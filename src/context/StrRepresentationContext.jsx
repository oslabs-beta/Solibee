import { createContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { JsxToString } from './JsxToString';
import { tailwindConfigStringsObj } from '../docsTailwindConfigStrings/tailwind-config-strings-obj';

export const StringRepContext = createContext();

export function StrContextProvider(props) {
  const [string, setString] = createStore({JsxToString, tailwindConfigStringsObj});
  
  return (
    <StringRepContext.Provider value={{ string, setString }}>
      {props.children}
    </StringRepContext.Provider>
  );
}
