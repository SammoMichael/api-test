export const fetchRecs = () => {
    return $.ajax({
        type: 'GET',
        url: 'api/recs',
    });
};

export const fetchRec = recId => {
    return $.ajax({
        type: 'GET',
        url: `api/recs/${recId}`,
    });
};

export const createRec = rec => {
    return $.ajax({
        type: 'POST',
        url: 'api/recs',
        data: {
            rec
        },
    });
};

export const updateRec = rec => {
    return $.ajax({
        type: 'PATCH',
        url: `api/recs/${rec.rec_id}`,
        data: {
            rec
        }
    });
};

export const deleteRec = recId => {
    return $.ajax({
        type: 'DELETE',
        url: `api/recs/${recId}`,
    });
};
