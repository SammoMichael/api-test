export const fetchPatients = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/patients',
    });
};

export const fetchPatient = patientId => {
    return $.ajax({
        method: 'GET',
        url: `api/patients/${patientId}`,
    });
};

export const createPatient = patient => {
    return $.ajax({
        method: 'POST',
        url: 'api/patients',
        data: {
            patient
        },
    });
};

export const updatePatient = patient => {
    return $.ajax({
        method: 'PATCH',
        url: `api/patients/${patient}`,
        data: {
            patient
        }
    });
};

export const deletePatient = patientId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/patients/${patientId}`,
    });
};
