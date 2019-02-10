import merge from 'lodash/merge';
import {
    RECEIVE_PATIENTS,
    RECEIVE_PATIENT,
    REMOVE_PATIENT
} from '../actions/patient_actions';

const patientsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PATIENTS:
            return merge({}, action.patients);
        case RECEIVE_PATIENT:
            return merge({}, {
                [action.patient.id]: action.patient
            });
        case REMOVE_PATIENT:
            newState = merge({}, state);
            delete newState[action.patientId];
            return newState;
        default:
            return state;
    }
};

export default patientsReducer;
