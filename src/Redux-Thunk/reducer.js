import * as types from './actionType';

const initialState = {
    posts:[],
    loading: false,
    error:null,
};


const postReducer = (state = initialState, action) => {

    if(action.type === types.FETCH_POST_START){
        return{
            ...state,
            loading:true,
        }


    }
    if(action.type === types.FETCH_POST_SUCCESS){
        return {
            ...state,
            loading:false,
            posts: action.payload,
        }

    }
    if(action.type === types.FETCH_POST_FAIL){
        return {
            ...state,
            loading:false,
            error:action.payload
        }


    }

    return state


}

export default postReducer;