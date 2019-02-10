import * as patientAPIUtil from '../util/patient_api_util.js';

export const RECEIVE_PATIENTS = 'RECEIVE_PATIENTS';
export const RECEIVE_PATIENT = 'RECEIVE_PATIENT';
export const REMOVE_PATIENT = 'REMOVE_PATIENT';

export const fetchPatients = () => dispatch => {
    return patientAPIUtil.fetchPatients()
        .then(patients => dispatch({
            type: RECEIVE_PATIENTS,
            patients
        }));
};

export const fetchPatient = patientId => dispatch => {
    return patientAPIUtil.fetchPatient(patientId)
        .then(patient => dispatch({
            type: RECEIVE_PATIENT,
            patient
        }));
};

export const createPatient = patient => dispatch => {
    return patientAPIUtil.createPatient(patient)
        .then(patient => dispatch({
            type: RECEIVE_PATIENT,
            patient
        }));
};

export const updatePatient = patient => dispatch => {
    return patientAPIUtil.updatePatient(patient)
        .then(patient => dispatch({
            type: RECEIVE_PATIENT,
            patient
        }));
};

export const deletePatient = patientId => dispatch => {
    return patientAPIUtil.deletePatient(patientId)
        .then(patientId => dispatch({
            type: REMOVE_PATIENT,
            patientId
        }));
};
