import merge from 'lodash/merge';
import {
    RECEIVE_CARDS,
    RECEIVE_CARD,
    REMOVE_CARD
} from '../actions/card_actions';

const cardsReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CARDS:
            return merge({}, action.cards);
        case RECEIVE_CARD:
            debugger
            return merge({}, {
                [action.card.id]: action.card
            });
        case REMOVE_CARD:
            debugger
            newState = merge({}, state);
            delete newState[action.cardId.card.id];
            return newState;
        default:
            return state;
    }
};

export default cardsReducer;
