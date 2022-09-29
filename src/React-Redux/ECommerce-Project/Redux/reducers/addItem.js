// initial state
const addItem = [];

// reducers
const addItems = (state = addItem, action) => {
    if(action.type === 'ADD_ITEM') {
        return [
            ...state,
             action.payload
        ]
        

    } if(action.type === 'DELETE_ITEM') {
        return (state = state.filter((x) => {
            return x.id !== action.payload.id
        } 
        ))
        
    }
    return state
//   switch (action.type) {
//     case "ADD_ITEM":
//       return [...state, action.payload];
//       break;
//     case "DELETE_ITEM":
//       return (state = state.filter((x) => {
//         return x.id !== action.payload.id;
//       }));
//       break;
//     default:
//       return state;
//   }
};

export default addItems;
