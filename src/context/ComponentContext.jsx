import { createContext } from 'solid-js';
import { createStore } from 'solid-js/store';


export const ComponentContext = createContext();

export function CompContextProvider(props) {
  const [components, setComponents] = createStore(['Drawer', 'Kanban Card', 'Input Form', 'Congke Component']);

  return (
    <ComponentContext.Provider value={{components, setComponents}}>
      {props.children}
    </ComponentContext.Provider>
  );
}


// to use the context 
// boiler plate: 
// import { useContext } from 'solid-js';
// import { ComponentContext } from '../context/ComponentContext';
// use the following 
// const { components } = useContext(ComponentContext);
