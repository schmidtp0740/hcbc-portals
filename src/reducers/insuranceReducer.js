import {
    FETCH_INSURANCE
} from "../actions/types";

const INITIAL_STATE = {
    data: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_INSURANCE:
            return {...state, data: action.payload};
        default:
            return {...state};
    }
};