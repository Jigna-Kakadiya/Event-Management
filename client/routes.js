//client/routes.js
import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import App from './components/app';
import CompanyDisplay from './components/CompanyDisplay';
import AddCompany from './components/AddCompany';

export const Routes = () => (
    <Router>
		  <Route exact path='/' component={App}>
			<Route exact path='/companyList' component={CompanyDisplay} />
		  </Route>
    </Router>
);
export default Routes;