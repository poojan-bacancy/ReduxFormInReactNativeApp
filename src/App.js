import React from 'react'
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore'
import { UserForm } from './Containers';

const App = () => {
    return (
        <Provider store={configureStore}> 
           <UserForm />
        </Provider> 
    )
}

export default App