//client/components/Add.js
import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../css/react-datepicker.css';


class Add extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activity: '',
			company: '',
			start: moment(),
			end: moment(),
			companies : [],
			activities : []
		};
		this.onClick = this.onClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.insertNewEvent = this.insertNewEvent.bind(this);
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
	}

	componentDidMount() {
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
		this.insertNewEvent(this);
		window.location = '/';
	}
	insertNewEvent(e) {
		const { activity, company, start, end } = this.state;
		axios.post('/insert',{  activity, company, start, end },  {
        headers: {
            'Content-Type': 'application/json',
        } });
	}

	handleChange(e) {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	handleStartDateChange(dt) {
		this.setState({start: dt});
	}

	handleEndDateChange(dt) {
		this.setState({end: dt});
	}

	render() {
		const { activity, company, start, end } = this.state;
		return (
			<div className="panel-one">
				<div className="panel-header">
					Add Event
				</div>
				<div className="panel-form">
					<form onSubmit={this.onClick}>
						<div className="form-group">
							<label>Company Name:</label>
							<select name="company" value={this.state.company} onChange={this.handleChange}>
								<option></option>
								{this.state.companies.map(function(exp){
									return  <option key={exp.cmpnyName}>{exp.cmpnyName}</option>
								})
								}
							</select>
							<img className="infoImg" src="../info.png" alt="?" title="Can not find Company name under dropdown? Go to Companies Tab and add new company."/>
						</div>
						<div className="form-group">
							<label>Activity Name:</label>
							<select name="activity" value={this.state.activity} onChange={this.handleChange}>
								<option></option>
								{this.state.activities.map(function(exp){
										return  <option key={exp.actName}>{exp.actName}</option>
									})
								}
							</select>
							<img className="infoImg" src="../info.png" alt="?" title="Can not find Activities name under dropdown? Go to Activity Tab and add new Activity."/>
						</div>
						<div className="form-group">
							<label>Start Time:</label>
							<div className="formDatepicker">
								<DatePicker
								selected={this.state.start}
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
								selected={this.state.end}
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
		)
	}
}
export default Add;

