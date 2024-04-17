import { createContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { compDescriptionsObj } from './componentDescriptionObj';

//create context
export const CompDescriptionsContext = createContext();

//create context provider
export const CompDescriptionContextProvider = (props) => {

  const [compDescriptions, setCompDescriptions] = createStore(compDescriptionsObj); 

  return (
    <CompDescriptionsContext.Provider
      value={{ compDescriptions, setCompDescriptions }}
    >
      {/* children here are any components that the provider wraps  */}
      {props.children}
    </CompDescriptionsContext.Provider>
  );
};
