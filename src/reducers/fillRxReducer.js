import {
    FILL_RX,
    FILL_RX_FETCHING,
    FILL_RX_ERROR
} from "../actions/types";

const INITIAL_STATE = {
    isFetching: false,
    res: "",
    message: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILL_RX_FETCHING:
            return {
                ...state,
                isFetching: true,
                message: "Filling Rx."
            };
        case FILL_RX:
            return {
                ...state,
                isFetching: false,
                res: action.payload,
                message: "Rx filled."
            };
        case FILL_RX_ERROR:
            return {
                ...state,
                isFetching: false,
                res: "Failed to fill Rx",
                message: "Rx filled."
            };
        default:
            return {...state};
    }
};

