//client/components/Modify.js
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import moment from 'moment';

class Modify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			evt: {}
		};
		this.onClick = this.onClick.bind(this);
		this.delete = this.delete.bind(this);
	}

	componentDidMount() {
		var i;
		axios.get('/showEvent/'+this.props.match.params.id)
		.then(res => {
			this.setState({ evt: res.data });
			this.state.evt.start = moment.utc(this.state.evt.start).local().format('YYYY-MM-DD HH:mm');
			this.state.evt.end = moment.utc(this.state.evt.end).local().format('YYYY-MM-DD HH:mm');
			this.setState(this.state);
		});
	}

	onClick(e) {
		this.delete(this);
		window.location = "/";
	}
	
	delete(e) {
		axios.delete('/devent/'+this.state.evt._id);
	}

	render() {
		return (
			<div className="panel">
				<div className="panel-one overflw">
					<div className="panel-header">
						Modify Event
					</div>
					<div className="panel-form">
						<dl>
							<dt>Company:</dt>
							<dd>{this.state.evt.company}</dd>
							<dt>Activity:</dt>
							<dd>{this.state.evt.activity}</dd>
							<dt>Start Date:</dt>
							<dd>{this.state.evt.start}</dd>
							<dt>End Date:</dt>
							<dd>{this.state.evt.end}</dd>
						</dl>
						<Link to={'/edit/'+this.state.evt._id} ><Button bsStyle="success" bsSize="small" className="flleft">Edit</Button></Link>
						<Button onClick={this.onClick} className="btn btn-danger flleft dngrbtn">Delete</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default Modify;