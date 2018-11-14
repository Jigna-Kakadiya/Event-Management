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
	<div>
	<AddCompany />
	  <table>
	  
		  <thead>
			<tr>
			  <th>Company name</th>
			</tr>
		  </thead>
		  <tbody>
			{this.state.companies.map(function(exp){
			return  <tr><td><Link to={'/company/'+exp._id}>{exp.cmpnyName}</Link>
			</td></tr>
			  })
			  }
		  </tbody>
	</table>
	</div>
    );
  }
}

export default CompanyDisplay;
