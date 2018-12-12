import {
    FETCH_PATIENTS
} from "../actions/types";

const INITIAL_STATE = {
    data: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PATIENTS:
            return {...state, data: action.payload};
        default:
            return {...state};
    }
};

