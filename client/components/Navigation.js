//client/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
		  <ul className="navbar-nav mr-auto">
			<li className="nav-item"><Link to='/'>Home</Link></li>
			<li className="nav-item"><Link to='/companyList'>Companies</Link></li>
			<li className="nav-item"><Link to='/activityList'>Activities</Link></li>
			<li className="nav-item"><Link to='/eventListByCompany'>EventList By Company</Link></li>
		  </ul>
	  </div>
    </nav>
  </header>
)

export default Navigation;