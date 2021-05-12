import React from 'react'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import MyFormSceen from './screens/MyFormScreen'

const App = () => {
    return (
        <Provider store={configureStore}> 
            <MyFormSceen />
        </Provider> 
    )
}

export default App