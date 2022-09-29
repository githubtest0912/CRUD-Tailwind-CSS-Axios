const redux = require('redux')
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

// action
function buyCake(){
    return {
        type: BUY_CAKE,
        info:'first reducer'
    }
}


// reducer
const initialState = {
    numOfCakes: 10
}

const reducer =(state = initialState, action) => {
    if(action.type === 'BUY_CAKE'){
        return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        
    }
    return state; //new state

}



//store

const store = createStore(reducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));
store.dispatch(buyCake());
unsubscribe();