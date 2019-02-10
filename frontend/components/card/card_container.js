import { connect } from 'react-redux';
import CardEditForm from './card_edit_form';
import { fetchPatients, fetchPatient, createPatient } from '../../actions/patient_actions';
import { fetchCard, 
    fetchCards, createCard, updateCard, deleteCard } from '../../actions/card_actions';
import {  
    fetchRecs, fetchRec, createRec, updateRec, deleteRec } from '../../actions/rec_actions';

window.createPatient = createPatient;
window.updateCard = updateCard;
window.updateRec = updateRec;

const mapStateToProps = (state, ownProps) => {
    const cards = Object.values(state.entities.cards);
    const recs = Object.values(state.entities.recs);
    const patient = state.entities.patients[ownProps.match.params] || {};
    return (
        { recs, cards, patient }
    );
};

const mapDispatchToProps = (dispatch) => ({
    createPatient: patient => dispatch(createPatient(patient)),
    fetchPatient: patientId => dispatch(fetchPatient(patientId)),
    fetchPatients: () => dispatch(fetchPatient()),
    fetchCard: deckId => dispatch(fetchCard(deckId)),
    fetchCards: () => dispatch(fetchCards()),
    createCard: card => dispatch(createCard(card)),
    updateCard: card => dispatch(updateCard(card)),
    deleteCard: cardId => dispatch(deleteCard(cardId)),
    fetchRec: recId => dispatch(fetchRec(recId)),
    fetchRecs: () => dispatch(fetchRecs()),
    createRec: rec => dispatch(createRec(rec)),
    updateRec: rec => dispatch(updateRec(rec)),
    deleteRec: recId => dispatch(deleteRec(recId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardEditForm);
