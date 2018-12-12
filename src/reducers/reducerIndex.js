import {combineReducers} from 'redux';
import allPatients from './allPatientsReducer';
import onePatient from './onePatientReducer';
import rxHistory from './rxHistoryReducer';
import submitRx from './submitRxReducer';
import fillRx from './fillRxReducer';
import insurance from './insuranceReducer';

export default combineReducers({
    onePatient,
    allPatients,
    rxHistory,
    submitRx,
    fillRx,
    insurance
});