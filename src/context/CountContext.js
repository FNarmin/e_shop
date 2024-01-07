import { createContext, useContext, useState } from "react";
const countContext = createContext();
const CountProvider = ({children}) =>{
    const [counts , setCounts] = useState([0, 0, 0]);
    return <countContext.Provider value={{counts, setCounts}}>{children}</countContext.Provider>
}
export const useCount = () => useContext(countContext);
export default CountProvider
