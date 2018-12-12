// Import action types
import {SUBMITTING_RX, SUBMIT_RX, FAIL_SUBMIT_RX} from '../actions/types';

const INITIAL_STATE = {
    isFetching: false,
    res: "",
    message: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUBMITTING_RX:
            return {
                type: SUBMITTING_RX,
                payload: "Loading Rx History.",
                isFetching: true,
                message: "Rx is fetching."
            };

        case SUBMIT_RX:
            return {
                type: SUBMIT_RX,
                payload: action.payload,
                isFetching: false,
                message: "Rx history loaded."
            };

        case FAIL_SUBMIT_RX:
            return {
                type: FAIL_SUBMIT_RX,
                payload: action.payload,
                isFetching: false,
                message: "Submitting Rx failed."
            };


        default:
            return state;
    }
};