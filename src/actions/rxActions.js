import axios from "axios";
import {FETCH_RX_HISTORY, FETCH_HISTORY_ERROR, FILL_RX, SUBMIT_RX, APPROVE_RX, FILL_RX_ERROR} from "./types";
import {rxUrl} from "./fetchUrls";
import moment from "moment";

export const submitRx = (data) => async dispatch => {
    try {
        const res = await axios.post(rxUrl, data);
        dispatch({
            type: SUBMIT_RX,
            payload: res.data
        });
    } catch (e) {
        console.error(e);
    }
};

export const fetchRxHistory = (id) => async dispatch => {
    try {
        const res = await axios.get(`${rxUrl}/${id}`);
        dispatch({
            type: FETCH_RX_HISTORY,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: FETCH_HISTORY_ERROR,
            payload: "No Patient Found."
        });
        console.error(e);

    }
};


export const fillRx = data => async dispatch => {
    try {
        data.expDate = moment(data.expDate).valueOf()
        data.timestamp = moment().valueOf()
        const res = await axios.patch(rxUrl, data);
        dispatch({
            type: FILL_RX,
            payload: res.data
        })
    } catch(e) {
        dispatch({
            type: FILL_RX_ERROR,
            payload: "Could Not Fill Rx."
        });
    }
};

export const approveRx = (data) => async dispatch => {
    try {
        data.timestamp = moment().valueOf()
        const res = await axios.put(rxUrl, data);
        dispatch({
            type: APPROVE_RX,
            payload: res.data
        });
    } catch (e) {
        console.error(e);
    }
};