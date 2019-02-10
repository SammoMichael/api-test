import {
    combineReducers
} from 'redux';
import patientsReducer from './patients_reducer';
import recsReducer from './recs_reducer';
import cardsReducer from './cards_reducer';

export default combineReducers({
    patients: patientsReducer,
    cards: cardsReducer,
    recs: recsReducer,
});
