import { combineReducers } from 'redux';
import commentReducer from './commentReducer';
import UIReducer from './UIReducer';

const rootReducer = combineReducers({
    comments: commentReducer,
    UI: UIReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;