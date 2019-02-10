import * as cardAPIUtil from '../util/card_api_util.js';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const fetchCards = () => dispatch => {
    return cardAPIUtil.fetchCards()
        .then(cards => dispatch({
            type: RECEIVE_CARDS,
            cards
        }));
};

export const fetchCard = patientId => dispatch => {
    return cardAPIUtil.fetchCard(patientId)
        .then(card => dispatch({
            type: RECEIVE_CARD,
            card
        }));
};

export const createCard = card => dispatch => {
    return cardAPIUtil.createCard(card)
        .then(card => dispatch({
            type: RECEIVE_CARD,
            card
        }));
};

export const updateCard = card => dispatch => {
    return cardAPIUtil.updateCard(card)
        .then(card => dispatch({
            type: RECEIVE_CARD,
            card
        }));
};

export const deleteCard = cardId => dispatch => {
    return cardAPIUtil.deleteCard(cardId)
        .then(cardId => dispatch({
            type: REMOVE_CARD,
            cardId
        }));
};
