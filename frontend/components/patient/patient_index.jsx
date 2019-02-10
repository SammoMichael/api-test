import React from 'react';
import { Link } from 'react-router-dom';
import PatientIndexItem from './patient_index_item';
// import SearchContainer from '../search/search_container';

export default class PatientIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPatients();
    }

    render() {
        const patients = this.props.patients.map((patient) => (
            <PatientIndexItem
                key={patient.patient_id}
                patientId={patient.patient_id}
                patient={patient}
                // openModal={this.props.openModal}
                name={patient.name}
            />
        ));
        return (
            <ul>
                {patients}
            </ul>
        );
    }
}
