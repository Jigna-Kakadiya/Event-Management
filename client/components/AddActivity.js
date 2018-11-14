//client/components/AddActivity.js
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class AddActivity extends React.Component {
constructor() {
      super();
this.state = {
        actName : ''
      };
this.onClick = this.onClick.bind(this);
this.handleChange = this.handleChange.bind(this);
this.insertNewEvent = this.insertNewEvent.bind(this);

    }
onClick(e) {
      this.insertNewEvent(this);
    }
insertNewEvent(e) {
const { actName} = this.state;
	axios.post('/insertActivity',{ actName }).then((result) => {
        this.props.history.push("/")
      });
}
handleChange(e) {
const state = this.state;
state[e.target.name] = e.target.value;
    this.setState(state);

  }
render() {
const {actName} = this.state;
    return (
      <form onSubmit={this.onClick}>
        <label>
          Activity Name:
          <input type="text" name= "actName" value={actName} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default AddActivity;

