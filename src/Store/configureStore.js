import { createStore , combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    
    // other reducers 

    form : formReducer
})

const store = createStore(
    rootReducer
) 

export default store
