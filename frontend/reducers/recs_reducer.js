import merge from 'lodash/merge';
import {
    RECEIVE_RECS,
    RECEIVE_REC,
    REMOVE_REC
} from '../actions/rec_actions';

const recsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_RECS:
            return merge({}, action.recs);
        case RECEIVE_REC:
            return merge({}, {
                [action.rec.id]: action.rec
            });
        case REMOVE_REC:
            debugger;
            newState = merge({}, state);
            delete newState[action.recId.id];
            return newState;
        default:
            return state;
    }
};

export default recsReducer;
