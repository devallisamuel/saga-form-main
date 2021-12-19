import { SUBMIT, ON_SUBMIT } from "../action/action"
 export const reducer = (state = [], action) => {
     switch(action.type) {
        case SUBMIT:
            console.log(action.payload);
            return [...state, {...action.payload}];
        default:
            return state;
     }
 }