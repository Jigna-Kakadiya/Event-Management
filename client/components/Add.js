//client/components/Add.js
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Add extends React.Component {
constructor() {
      super();
this.state = {
        sname: '',
        activity: '',
        company: '',
        start: '',
		end: ''
      };
this.onClick = this.onClick.bind(this);
this.handleChange = this.handleChange.bind(this);
this.insertNewEvent = this.insertNewEvent.bind(this);

    }
onClick(e) {
      this.insertNewEvent(this);
    }
insertNewEvent(e) {
const { sname, activity, company, start, end } = this.state;
	axios.post('/insert',{ sname, activity, company, start, end }).then((result) => {
        this.props.history.push("/")
      });
}
handleChange(e) {
const state = this.state;
state[e.target.name] = e.target.value;
    this.setState(state);

  }
render() {
const { sname, activity, company, start, end } = this.state;

    return (
      <form onSubmit={this.onClick}>
        <label>
          Name:
          <input type="text" name= "sname" value={sname} onChange={this.handleChange} />
        </label>
<label>
          activity:
          <input type="text" name= "activity" value={activity} onChange={this.handleChange} />
        </label>
<label>
          company:
          <input type="text" name= "company" value={company} onChange={this.handleChange} />
        </label>
<label>
          start:
          <input type="text" name= "start" value={start} onChange={this.handleChange} />
        </label>
<label>
          end:
          <input type="text" name= "end" value={end} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Add;

