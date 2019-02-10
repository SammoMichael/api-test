export const fetchPatients = () => {
    return $.ajax({
        type: 'GET',
        url: 'api/patients',
    });
};

export const fetchPatient = patientId => {
    return $.ajax({
        type: 'GET',
        url: `api/patients/${patientId}`,
    });
};

export const createPatient = patient => {
    return $.ajax({
        type: 'POST',
        url: 'api/patients',
        data: {
            patient
        },
    });
};

export const updatePatient = patient => {
    return $.ajax({
        type: 'PATCH',
        url: `api/patients/${patient}`,
        data: {
            patient
        }
    });
};

export const deletePatient = patientId => {
    return $.ajax({
        type: 'DELETE',
        url: `api/patients/${patientId}`,
    });
};
