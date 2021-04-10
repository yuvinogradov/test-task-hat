import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";
import {cardsListReducer} from "./cards-reducer";



export const rootReducer = combineReducers({
    appState: appReducer,
    cardsList: cardsListReducer,
})

// вариант для работы с расширением (хрома) redux devtools:
// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(
    rootReducer,
    /* preloadedState, */
    composeEnhancers(applyMiddleware(thunkMiddleware))
 );


export type RootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store

export default store;
