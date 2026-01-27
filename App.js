import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from './src/context/BlogContext';

const App = () => {
    return (
        <Provider>
            <AppNavigator/>
        </Provider>
    )
};

export default App;