import React from 'react'
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore'
import { MyForm } from './Containers';

const App = () => {
    return (
        <Provider store={configureStore}> 
            <MyForm />
        </Provider> 
    )
}

export default App