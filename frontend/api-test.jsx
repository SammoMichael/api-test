import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchCards, fetchCard, updateCard, deleteCard } from './actions/card_actions';
import { fetchPatients, fetchPatient } from './actions/patient_actions';
import { updateRec, deleteRec, fetchRecs } from './actions/rec_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.getStore = store.getState();
    window.updateCard = updateCard;
    window.updateRec = updateRec;
    window.deleteCard = deleteCard;
    window.deleteRec = deleteRec;
    window.fetchCards = fetchCards;
    window.fetchCard = fetchCard;
    window.fetchPatients = fetchPatients;
    window.fetchPatient = fetchPatient;
    window.fetchRecs = fetchRecs;
    window.dispatch = store.dispatch;
    store.dispatch(fetchCards());
    store.dispatch(fetchPatients());
    store.dispatch(fetchRecs());
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
