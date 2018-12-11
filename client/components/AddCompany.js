//client/components/AddCompany.js
import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class AddCompany extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cmpnyName : '',
			modalIsOpen: false
		};
		this.onClick = this.onClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.insertNewCompany = this.insertNewCompany.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({
			modalIsOpen: true
		});
	}
		
	closeModal() {
		this.setState({
			modalIsOpen: false,
			cmpnyName : ''
		});
	}

	onClick(e) {
		this.insertNewCompany(this);
		window.location = '/';
	}
		
	insertNewCompany(e) {
		const { cmpnyName} = this.state;
		axios.post('/insertCompany',{ cmpnyName });
	}

	handleChange(e) {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	}
	  
	render() {
		const {cmpnyName} = this.state;
		return (
			<div className="panel-one">
				<div className="panel-header">
					Add Company
				</div>
				<div className="panel-form">
					<Button bsStyle="success" bsSize="small" onClick={this.openModal}>Add Company</Button>
					<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					contentLabel="Add Company"
					className="Modal">
						<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
						   <Button bsStyle="danger" bsSize="small" onClick={this.closeModal}>Close</Button>
						</Link><br />
						<fieldset>
							<label>Company Name:</label>
							<input type="text" name= "cmpnyName" value={cmpnyName} onChange={this.handleChange} />
						</fieldset>
						<div className='button-center'>
							<br/>
							<Button bsStyle="success" bsSize="xsmall" onClick={this.onClick}>Add Company</Button>
						</div>
				   </Modal>
				</div>
			</div>
		)	
	}
}
export default AddCompany;

