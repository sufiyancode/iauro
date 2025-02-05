import { createContext } from "react";
import App from "../App";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "1246789";
  return (
    <AppContext.Provider value={phone}>{props.children}</AppContext.Provider>
  );
};
export default ContextProvider;
