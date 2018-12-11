//client/components/ActivityDisplay.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddActivity from './AddActivity';
import {Link} from 'react-router-dom';

class ActivityDisplay extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			activities : []
		};
	}
	
	componentDidMount() {
		axios.get('/activities')
		.then(response => {
			this.setState({activities: response.data});
		});
	}

	render() {
		return (
			<div className="panel">
				<AddActivity />
				<div className="panel-two">
					<div className="panel-header">
						Activity List
					</div>
					<div className="panel-form">
						<table className="table table-stripe">
							<thead>
								<tr>
								<th>Activity</th>
								</tr>
							</thead>
						<tbody>
						{this.state.activities.map(function(exp){
							return  <tr key={exp._id}><td>{exp.actName}
							</td></tr>
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

export default ActivityDisplay;
