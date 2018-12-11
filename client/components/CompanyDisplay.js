//client/components/CompanyDisplay.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddCompany from './AddCompany';
import {Link} from 'react-router-dom';

class CompanyDisplay extends React.Component {	
	constructor(props) {
	  super(props);
	this.state = {
		companies : []
	  };
	}
	componentDidMount() {
	axios.get('/companies')
	  .then(response => {
		this.setState({companies: response.data});
	  });
	}

render() {
    return (
<div className="panel">
<AddCompany />
<div className="panel-two">
<div className="panel-header">
Company List
</div>
<div className="panel-form">
<table className="table table-stripe">
<thead>
<tr>
<th>Company</th>
</tr>
</thead>
<tbody>
{this.state.companies.map(function(exp){
return  <tr key={exp._id}>
<td>{exp.cmpnyName}</td>		
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

export default CompanyDisplay;
