//client/components/AddActivity.js
import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class AddActivity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actName : '',
			modalIsOpen: false
		};
		this.onClick = this.onClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.insertNewActivity = this.insertNewActivity.bind(this);
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
			actName : ''
		});
	}

	onClick(e) {
		this.insertNewActivity(this);
		window.location = '/';
    }
	
	insertNewActivity(e) {
		const { actName} = this.state;
		axios.post('/insertActivity',{ actName });
	}

	handleChange(e) {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	}
  
	render() {
		const {actName} = this.state;
		return (
			<div className="panel-one">
				<div className="panel-header">
					Add Activity
				</div>
				<div className="panel-form">
					<Button bsStyle="success" bsSize="small" onClick={this.openModal}>Add Activity</Button>
					<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					contentLabel="Add Activity"
					className="Modal">
						<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}><Button bsStyle="danger" bsSize="small" onClick={this.closeModal}>Close</Button></Link><br />
						<fieldset>
							<label>Activity Name:</label>
							<input type="text" name= "actName" value={actName} onChange={this.handleChange} />
						</fieldset>
						<div className='button-center'>
							<br/>
							<Button bsStyle="success" bsSize="xsmall" onClick={this.onClick}>Add Activity</Button>
						</div>
				   </Modal>
				</div>
			</div>
		)
	}
}
export default AddActivity;

