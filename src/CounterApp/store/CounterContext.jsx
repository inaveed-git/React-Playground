import { createContext, useContext, useReducer } from "react";


export CounterContext = createContext();



const initialState = { count: 0 };

const counterProvider = ({ children }) => {

    let [count, dispatchCount] = useReducer();






    return (
        <CounterContext.Provider >
            {children}
        </CounterContext.Provider>
    )




}


export default counterProvider; 
