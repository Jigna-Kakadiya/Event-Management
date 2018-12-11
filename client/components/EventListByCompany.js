//client/components/EventListByCompany.js
import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class Add extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			company : '',
			companies : []
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		axios.get('/companies')
		.then(response => {
			this.setState({companies: response.data});
		});
	}
	
	handleChange(e) {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	render() {
		const { company} = this.state;
		return (
			<div className="panel">
			<div className="panel-one">
				<div className="panel-header">
					Company Based Event
				</div>
				<div className="panel-form">
					<form>
						<div className="form-group">
							<label>Company Name:</label>
							<select name="company" value={this.state.company} onChange={this.handleChange}>
								<option></option>
								{this.state.companies.map(function(exp){
									return  <option key={exp.cmpnyName}>{exp.cmpnyName}</option>
								})
								}
							</select>
							<img className="infoImg" src="../info.png" alt="?" title="Can not find Company name under dropdown? Go to Company Tab and add new company."/>
						</div>
						<div className="form-group">
							<label>&nbsp;</label> 
							<Link to={'/company/'+company}><Button className="btn_submit">Submit</Button></Link>
						</div>
					</form>
				</div>
			</div>
			</div>
		)
	}
}
export default Add;

