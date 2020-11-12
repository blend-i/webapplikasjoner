import React, {createContext, useState} from 'react';

export const GlobalContext = createContext({
    state: "",
    updateState: (user) => {}
});

export const GlobalUserState = ({children}) => {

    //const {state, setState} = useState();
    const [state, setState] = useState();

    const updateState = (user) => {
        setState(user);
    }

    return <GlobalContext.Provider value={{state, updateState}} >{ children }</GlobalContext.Provider>;
};

export default GlobalUserState;