import { combineReducers } from 'redux';
import container  from './container'
import login  from './login'
import main from './main';


const rootReducer = combineReducers({
    container,
    login,
    main,
})

export default rootReducer;