import axios from "axios";
import {FETCH_ONE_PATIENT, FETCH_ONE_PATIENT_ERROR, FETCH_PATIENTS, FETCH_PATIENTS_ERROR} from "./types";
import {pdUrl} from "./fetchUrls";

export const fetchPatients = () => async dispatch => {
    try {
        const res = await axios.get(pdUrl);
        dispatch({
            type: FETCH_PATIENTS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: FETCH_PATIENTS_ERROR,
            payload: "An error has occurred " + e
        })
    }
};


export const fetchOnePatient = (id) => async dispatch => {
    try {
        const res = await axios.get(`${pdUrl}/${id}`);
        dispatch({
            type: FETCH_ONE_PATIENT,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: FETCH_ONE_PATIENT_ERROR,
            payload: "An error has occurred " + e
        })

    }
};