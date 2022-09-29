const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers


const increment = 'increment';
const decrement = 'decrement';


// action

function increase(){
    return{
        type:'increment',
       
    }
}

function decrease(){
    return{
        type:'decrement',
       
    }
}

// reducer

const initialIncrementState = {
    increment:0
}

const initialDecrementState = {
    decrement:0
}

const incrementReducer = (state=initialIncrementState, action) => {
    if(action.type === increment) {
        return{
            ...state,
            increment: increment+1
        }
    }
    return state;
}

const decrementReducer = (state=initialDecrementState, action) => {
    if(action.type === decrement) {
        return{
            ...state,
            decrement: decrement-1
        }
    }
    return state;
}

const rootReducer = combineReducers({
    increment: incrementReducer,
    decrement: decrementReducer
})

// store

const store = createStore(rootReducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));
store.dispatch(increase())
store.dispatch(decrease())

unsubscribe()