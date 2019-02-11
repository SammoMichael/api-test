import React from 'react';
import PatientContainer from '../patient/patient_container';
import { Link } from 'react-router-dom';

export default class CardEditForm extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {  
            patientId: this.props.match.params.patientId,
            state: '',
            issuer: '',
            cardExpiryDate: '',
            recExpiryDate: '',
            recId: '',
            cardId: '',
            cardImgUrl: '',
            recImgUrl: '',
        };
        this.handleSubmitUpdateCard = this.handleSubmitUpdateCard.bind(this);
        this.handleSubmitDeleteCard = this.handleSubmitDeleteCard.bind(this);
        this.handleSubmitUpdateRec = this.handleSubmitUpdateRec.bind(this);
        this.handleSubmitDeleteRec = this.handleSubmitDeleteRec.bind(this);
    }
    componentDidMount() {
        this.props.fetchPatients()
        this.props.fetchPatient(this.props.match.params.patientId);
        this.props.fetchCards()
        this.props.fetchRecs();

    }
    // componentWillUnmount() {
    //     this.props.clearErrors();
    // }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmitUpdateCard(e) {
        e.preventDefault();
        const updatedCard = {
            patient_id: this.props.match.params.patientId,
            card_id: this.state.cardId,
            state: this.state.state,
            expiration: this.state.cardExpiryDate,
            img_url: this.state.cardImgUrl
        }
        if (Date.parse(updatedCard.expiration) < new Date) {
            alert('can not add expired card!')
        }
        this.props.updateCard(updatedCard);
    }
    handleSubmitDeleteCard(e) {
        e.preventDefault();
        if (typeof card === 'undefined') {
            var card = this.props.cards.filter(card => card.patient_id === this.props.match.params.patientId);
            card = card[0];
        }
        this.props.deleteCard(card.card_id);
    }
    handleSubmitUpdateRec(e) {
        e.preventDefault();
        const updatedRec = {
            issuer: this.state.issuer,
            patient_id: this.props.match.params.patientId,
            expiration: this.state.recExpiryDate,
            img_url: this.state.recImgUrl,
            rec_id: this.state.recId,
        }
        if (Date.parse(updatedRec.expiration) < new Date()) {
            alert('can not add expired recommendation!')
        }
        this.props.updateRec(updatedRec);
    }
    handleSubmitDeleteRec(e) {
        e.preventDefault();
        if (typeof rec === 'undefined') {
            var rec = this.props.recs.filter(rec => rec.patient_id === this.props.match.params.patientId);
            rec = rec[0];
        }

        this.props.deleteRec(rec.rec_id);
    }

    renderErrors() {
        return (
            <>
                {this.props.errors.map((error, i) => (
                    <li 
                    className="error-li"    
                    key={`error-${i}`}
                    >
                        {error}
                    </li>
                ))}
            </>
        )
    }

    render() {
        let patient = this.state;
        var card = this.state;
        var rec = this.state;
        this.props.cards.filter(card => card.patient_id === this.props.match.params.patientId) ? 
            card = this.props.cards.filter(card => card.patient_id === this.props.match.params.patientId) : this.state
        
        this.props.recs.filter(rec => rec.patient_id === this.props.match.params.patientId) ? 
            rec = this.props.recs.filter(rec => rec.patient_id === this.props.match.params.patientId) : this.state
        card = card[0] || card
        rec = rec[0] || rec 
        return (
            <>
                    
                <div className="edit-form">
                    <form onSubmit={this.handleSubmit} className='form-box'>
                        <img className="card-image" src={card.img_url} alt="Card Image" />
                        <img className="rec-image" src={rec.img_url} alt="Rec Image" />
                        <h1>Edit Form</h1>

                        <input
                            value={this.state.state}
                            onChange={this.update('state')}
                            placeholder={card.state}
                        />

                        <input
                            value={card.cardId}
                            onChange={this.update('cardId')}
                            placeholder={card.card_id}
                        />

                        <input
                            value={this.state.cardImgUrl}
                            onChange={this.update('cardImgUrl')}
                            placeholder={card.img_url}
                        />
                        <input
                            type="date"
                            value={this.state.cardExpiryDate}
                            placeholder={card.expiration}
                            onChange={this.update('cardExpiryDate')}
                        />
                        <button onClick={this.handleSubmitUpdateCard}>Update</button>
                        <button onClick={this.handleSubmitDeleteCard}>Delete</button>
                    </form>
                    <br></br>
                    <form>
                        <input placeholder={rec.issuer}
                            value={this.state.issuer}
                            onChange={this.update('issuer')}
                        />
                        <input placeholder={rec.img_url}
                            value={this.state.cardRecImgUrl}
                            onChange={this.update('recImgUrl')}
                        />
                        <input placeholder={rec.rec_id}
                            value={this.state.recId}
                            onChange={this.update('recId')}
                        />

                        <input type="date" placeholder={rec.expiration}
                            value={this.state.recExpiryDate}
                            onChange={this.update('recExpiryDate')}
                        />
                        <button onClick={this.handleSubmitUpdateRec}>Update</button>
                        <button onClick={this.handleSubmitDeleteRec}>Delete</button>
                    </form>
                </div>
            </>
        );
    }
}

