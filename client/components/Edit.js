//client/components/Edit.js
import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../css/react-datepicker.css';


class Edit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			evt : {},
		companies : [],
		activities : []
		};
		this.onClick = this.onClick.bind(this);
		this.updateEvent = this.updateEvent.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
	}

	componentDidMount() {
		axios.get('/showEvent/'+this.props.match.params.id)
		.then(res => {
			this.setState({ evt: res.data });
		});
		
		axios.get('/companies')
		.then(response => {
			this.setState({companies: response.data});
		});

		axios.get('/activities')
		.then(res => {
			this.setState({activities: res.data});
		});
	}

	onClick(e) {
		e.preventDefault();
		this.updateEvent(this);
		window.location="/";
	}

	updateEvent(e) {
		const { activity, company, start, end } = this.state.evt;
		axios.put('/uevent/'+this.props.match.params.id,{  activity, company, start, end } );
	}

	handleChange(e) {
		const state = this.state.evt;
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	handleStartDateChange(dt) {
		console.log(dt);
		const state = this.state.evt;
		state['start'] = dt;
		this.setState(state);
	}

	handleEndDateChange(dt) {
		const state = this.state.evt;
		state['end'] = dt;
		this.setState(state);
	}

	render() {
		return (
			<div className="panel">			
				<div className="panel-one">
					<div className="panel-header">
						Edit Event
					</div>
					<div className="panel-form">
						<form onSubmit={this.onClick}>
							<div className="form-group">
								<label>Company Name:</label>
								<select name="company" value={this.state.evt.company} onChange={this.handleChange}>
									<option></option>
									{this.state.companies.map(function(exp){
										return  <option key={exp.cmpnyName}>{exp.cmpnyName}</option>
									})
									}
								</select>
								<img className="infoImg" src="../info.png" alt="?" title="Can not find Company name under dropdown? Go to Company Tab and add new company."/>
							</div>
							<div className="form-group">
								<label>Activity Name:</label>
								<select name="activity" value={this.state.evt.activity} onChange={this.handleChange}>
									<option></option>
									{this.state.activities.map(function(exp){
											return  <option key={exp.actName}>{exp.actName}</option>
										})
									}
								</select>
								<img className="infoImg" src="../info.png" alt="?" title="Can not find Activity name under dropdown? Go to Activity Tab and add new Activity."/>
							</div>
							<div className="form-group">
								<label>Start Time:</label>
								<div className="formDatepicker">
									<DatePicker
									selected={moment(this.state.evt.start)}
									onChange={this.handleStartDateChange}
									showTimeSelect
									timeFormat="HH:mm"
									timeIntervals={15}
									dateFormat="LLL"
									timeCaption="time"
									/>
								</div>
							</div>
							<div className="form-group">
								<label>End Time:</label>  
								<div className="formDatepicker">
									<DatePicker
									className = "dpend"
									selected={moment(this.state.evt.end)}
									onChange={this.handleEndDateChange}
									showTimeSelect
									timeFormat="HH:mm"
									timeIntervals={15}
									dateFormat="LLL"
									timeCaption="time"
									/>
								</div>
							</div>
							<div className="form-group">
								<label>&nbsp;</label> 
								<input className="btn_submit" type="submit" value="Submit" />
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default Edit;

