
export const fetchCards = () => {
    return $.ajax({
        type: 'GET',
        url: 'api/cards',
    });
};

export const fetchCard = cardId => {
    return $.ajax({
        type: 'GET',
        url: `api/cards/${card_id}`,
    });
};

export const createCard = card => {
    return $.ajax({
        type: 'POST',
        url: `api/cards/${card.card_id}`,
        data: {
            card
        },
    });
};

export const updateCard = card => {
    return $.ajax({
        type: 'PATCH',
        url: `api/cards/${card.card_id}`,
        data: {
            card
        }
    });
};

export const deleteCard = cardId => {
    return $.ajax({
        type: 'DELETE',
        url: `api/cards/${cardId}`,
    });
};
