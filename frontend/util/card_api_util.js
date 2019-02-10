export const fetchCards = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/cards',
    });
};

export const fetchCard = patientId => {
    return $.ajax({
        method: 'GET',
        url: `api/patients/${patientId}/cards`,
    });
};

export const createCard = card => {
    return $.ajax({
        method: 'POST',
        url: `api/patients/${card.patientId}/cards`,
        data: {
            card
        },
    });
};

export const updateCard = card => {
    return $.ajax({
        method: 'PATCH',
        url: `api/patients/${card.patientId}/cards`,
        data: {
            card
        }
    });
};

export const deleteCard = patientId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/patients/${patientId}/cards`,
    });
};
