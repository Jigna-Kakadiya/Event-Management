//client/components/Home.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import moment from 'moment';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events : []
		};
	}
	componentDidMount() {
		var i;
		axios.get('/events')
		.then(response => {
			this.setState({events: response.data});
			for(i in this.state.events) {
				this.state.events[i].start = moment.utc(this.state.events[i].start).local().format('YYYY-MM-DD HH:mm');
				this.state.events[i].end = moment.utc(this.state.events[i].end).local().format('YYYY-MM-DD HH:mm');
			}
			this.setState(this.state);
		});
	}

	render() {
		return (
			<div className="panel">
				<Add />
				<div className="panel-two">
					<div className="panel-header">
						List of Events
					</div>
					<div className="panel-form">
						<table className="table table-stripe">
							<thead>
								<tr>
									<th>Company</th>
									<th>Activity</th>
									<th>Start Time</th>
									<th>End Time</th>
									<th>Modify</th>
								</tr>
							</thead>
							<tbody>
								{this.state.events.map(function(exp){
									return  <tr key={exp._id}>
										<td className="tableColumn"><Link to={'/company/'+exp.company}>{exp.company}</Link></td>
										<td>{exp.activity}</td>
										<td>{exp.start}</td>
										<td>{exp.end}</td>
										<td className="tableColumn"><Link to={'/event/'+exp._id}>Edit/Delete</Link></td>		
										</tr>
								})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
