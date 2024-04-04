import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
import { JsxToString } from "./JsxToString";

export const StringRepContext = createContext();

export function StrContextProvider(props) {
  const [string, setString] = createStore(JsxToString);
  // console.log("1", JsxToString);

  return (
    <StringRepContext.Provider value={{ string, setString }}>
      {props.children}
    </StringRepContext.Provider>
  );
}
