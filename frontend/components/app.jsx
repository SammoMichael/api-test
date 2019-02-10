import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PatientContainer from '../components/patient/patient_container';
// import Modal from '../components/modal/modal';
// import CardContainer from './card/card_container';
// import CardEditForm from './card/card_edit_form';

export class App extends Component {
  render() {
    return (
      <div>
        <PatientContainer />
        {/* <Route exact path="/patients/:patientId/edit" component={CardContainer} /> */}
      </div>
    );
  }
}

export default App;
