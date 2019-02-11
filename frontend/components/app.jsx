import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PatientContainer from '../components/patient/patient_container';
// import Modal from '../components/modal/modal';
import CardContainer from '../components/card/card_container';

export class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <div className="back-button" onClick={() => window.history.back()}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <Route path="/" component={PatientContainer} />
        <Route path="/patients/:patientId/edit" component={CardContainer} />
        {/* <CardContainer /> */}
      </div>
    );
  }
}

export default App;
