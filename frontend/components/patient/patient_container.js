import { connect } from 'react-redux';
import PatientIndex from './patient_index';
import { fetchPatients, fetchPatient } from '../../actions/patient_actions';
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        patients: Object.values(state.entities.patients)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchPatients: () => dispatch(fetchPatients()),
    fetchPatient: patientId => dispatch(fetchPatient(patientId)),
    // openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientIndex);
