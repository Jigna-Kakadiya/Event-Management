//client/components/EachCompany.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';

class test extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				evt : []
			};
	}
	componentDidMount() {
		var i;
		axios.get('/company/'+this.props.match.params.company).then(response => {
			this.setState({evt: response.data});
			for(i in this.state.evt) {
				this.state.evt[i].start = moment.utc(this.state.evt[i].start).local().format('YYYY-MM-DD HH:mm');
				this.state.evt[i].end = moment.utc(this.state.evt[i].end).local().format('YYYY-MM-DD HH:mm');
			}
			this.setState(this.state);
		});
	}

	render() {
		return (
			<div className="panel">
			<div className="panel-one">
				<div className="panel-header">
					{this.props.match.params.company}
				</div>
				<div className="panel-form">
					<table className="table table-stripe">
						<thead>
							<tr>
							<th>Activity</th>
							<th>Start Time</th>
							<th>End Time</th>
							</tr>
						</thead>
						<tbody>
							{this.state.evt.map(function(exp){
								return <tr key={exp._id}>
									<td>{exp.activity}</td>
									<td>{exp.start}</td>
									<td>{exp.end}</td>			
									</tr>
							})}
						</tbody>
					</table>
				</div>
			</div>
			</div>
		);
	}
}

export default test;
