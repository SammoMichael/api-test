import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchCards } from './actions/card_actions';
import { fetchPatients } from './actions/patient_actions';
import { fetchRecs } from './actions/rec_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.getStore = store.getState();
    window.fetchCards = fetchCards;
    window.fetchPatients = fetchPatients;
    window.fetchRecs = fetchRecs;
    window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
