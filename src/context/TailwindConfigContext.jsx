import { createContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { tailwindConfigStringsObj } from '../docsTailwindConfigStrings/tailwind-config-strings-obj';

//create context
export const TailwindConfigContext = createContext();

//create context provider
export const TailwindConfigContextProvider = (props) => {

  const [tailwindStrings, setTailwindStrings] = createStore(tailwindConfigStringsObj); 

  return (
    <TailwindConfigContext.Provider  value = {{tailwindStrings, setTailwindStrings}}>
      {/* children here are any components that the provider wraps  */}
      {props.children}
    </TailwindConfigContext.Provider>
  );
};
