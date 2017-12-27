import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    
    switch(action.type){
        case FETCH_WEATHER:               
            //NEVER CHANGE THE STATE IN REDUCER - RETURN A NEW ONE
            return [action.payload.data, ...state]; //new record at the top
            // the same return state.concat(action.payload.data); 
    }

    return state;
}