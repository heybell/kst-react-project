import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    isLoggedIn: false,
});

export default rootReducer;