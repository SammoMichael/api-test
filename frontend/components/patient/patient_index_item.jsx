import React from 'react';
import { Link } from 'react-router-dom';

// import Modal from '../modal/modal';

const PatientIndexItem = ({ patientId, patient, openModal }) => (
    <>
        <Link to={`/patients/${patientId}/edit`} key={patientId}>
            <li className="patient-index-item"
            // onClick={() => openModal('create')}
            >

                <span className='index-thumb' />
                <span className="patient-index-name">{patient.name}</span>
                <span className="patient-index-name">{patient.patient_id}</span>
            </li>
        </Link>
    </>
);

export default PatientIndexItem;
