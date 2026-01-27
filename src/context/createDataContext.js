/**
 * Factory function for creating Context + Provider
 * Used in: src/context/BlogContext.js
 */
import React, { useReducer } from 'react';


const createDataContext = (reducer, actions, initialState) => {
    // Create empty context
    const Context = React.createContext();

    // Provider component that wraps the app
    const Provider = ({ children }) => {
        // Setup state and dispatch
        const [state, dispatch] = useReducer(reducer, initialState);

        // Bind dispatch to all actions
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        // Pass state and actions to children
        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    // Return both for export
    return { Context, Provider };
};

export default createDataContext;
