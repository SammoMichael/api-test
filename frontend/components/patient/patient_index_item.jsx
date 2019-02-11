import React from 'react';
import { Link } from 'react-router-dom';

// import Modal from '../modal/modal';

const PatientIndexItem = ({ patientId, patient, openModal }) => (
    <>
        <Link className="patient-link" to={`/patients/${patientId}/edit`} key={patient.patient_id}>
            <li className="patient-index-item"
            // onClick={() => openModal('create')}
            >
                <span className='index-thumb' />
                <span className="patient-index-name">{patient.name}</span>
                <span className="patient-index-name">  Id#: {patient.patient_id}</span>
            </li>
        </Link>
    </>
);

export default PatientIndexItem;
