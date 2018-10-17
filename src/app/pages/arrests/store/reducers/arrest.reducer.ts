import { Arrest } from "../../models";
import * as fromAction from '../actions';

export function arrestReducer(
    state: Arrest[], 
    action: fromAction.ArrestActions
) {
    switch (action.type) {
        case fromAction.CREATE_ARREST:
            return action.payload;

        case fromAction.ADD_ARREST:
            return [...state, action.payload];

        case fromAction.UPDATE_ARREST:
            return state.map(arrest => {
                return Object.assign({}, arrest, action.payload);
            });

        case fromAction.REMOVE_ARREST:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}
