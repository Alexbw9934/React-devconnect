import { SET_ALERT,REMOVE_ALERT } from "../actions/types";
const initialState=[{}];
export default function alert(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case SET_ALERT:
            return [...state,payload]//action.payload in order to add our alert that is in state
        case REMOVE_ALERT:
            return state.filter(alert=> alert.id!==payload);
        default:
            return state; 
      
    }
}