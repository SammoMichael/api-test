export const fetchRecs = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/recs',
    });
};

export const fetchRec = patientId => {
    return $.ajax({
        method: 'GET',
        url: `api/patients/${patientId}/recs`,
    });
};

export const createRec = rec => {
    return $.ajax({
        method: 'POST',
        url: `api/patients/${rec.patientId}/recs`,
        data: {
            rec
        },
    });
};

export const updateRec = rec => {
    return $.ajax({
        method: 'PATCH',
        url: `api/patients/${rec.patientId}/recs`,
        data: {
            rec
        }
    });
};

export const deleteRec = patientId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/patients/${patientId}/recs`,
    });
};