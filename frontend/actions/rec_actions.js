import * as recAPIUtil from '../util/rec_api_util.js';

export const RECEIVE_RECS = 'RECEIVE_RECS';
export const RECEIVE_REC = 'RECEIVE_REC';
export const REMOVE_REC = 'REMOVE_REC';

export const fetchRecs = () => dispatch => {
    return recAPIUtil.fetchRecs()
        .then(recs => dispatch({
            type: RECEIVE_RECS,
            recs
        }));
};

export const fetchRec = patientId => dispatch => {
    return recAPIUtil.fetchRec(patientId)
        .then(rec => dispatch({
            type: RECEIVE_REC,
            rec
        }));
};

export const createRec = rec => dispatch => {
    return recAPIUtil.createRec(rec)
        .then(rec => dispatch({
            type: RECEIVE_REC,
            rec
        }));
};

export const updateRec = rec => dispatch => {
    return recAPIUtil.updateRec(rec)
        .then(rec => dispatch({
            type: RECEIVE_REC,
            rec
        }));
};

export const deleteRec = patientId => dispatch => {
    return recAPIUtil.deleteRec(patientId)
        .then(recId => dispatch({
            type: REMOVE_REC,
            recId
        }));
};
