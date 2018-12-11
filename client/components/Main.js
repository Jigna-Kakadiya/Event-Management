import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import CompanyDisplay from './CompanyDisplay'
import ActivityDisplay from './ActivityDisplay'
import EventListByCompany from './EventListByCompany'
import EachCompany from './EachCompany'
import Modify from './Modify'
import Edit from './Edit'

const Main = () => (
  <main>
    <Switch>
		<Route exact path='/' component={Home}/>
		<Route path='/companyList' component={CompanyDisplay}/>
		<Route path='/activityList' component={ActivityDisplay}/>
		<Route path='/eventListByCompany' component={EventListByCompany}/>
		<Route path='/company/:company' component={EachCompany}/>
		<Route path='/event/:id' component={Modify}/>
		<Route path='/edit/:id' component={Edit}/>
    </Switch>
  </main>
)

export default Main
