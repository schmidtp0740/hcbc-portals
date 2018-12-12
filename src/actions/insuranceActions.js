import axios from "axios";
import {FETCH_INSURANCE} from "./types";
import {insuranceUrl} from "./fetchUrls";

export const fetchInsurance = (id) => async dispatch => {
    try {
        const res = await axios.get(`${insuranceUrl}/${id}`);
        dispatch({
            type: FETCH_INSURANCE,
            payload: res.data
        })
    } catch (e) {
        console.error(e);
    }
};