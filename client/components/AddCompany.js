//client/components/AddCompany.js
import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
class AddCompany extends React.Component {
constructor() {
      super();
this.state = {
        cmpnyName : '',
		modalIsOpen: false,
		messageFromServer: ''

      };
this.onClick = this.onClick.bind(this);
this.handleChange = this.handleChange.bind(this);
this.insertNewEvent = this.insertNewEvent.bind(this);
this.openModal = this.openModal.bind(this);
this.closeModal = this.closeModal.bind(this);
    }
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
	
closeModal() {
      this.setState({
        modalIsOpen: false,
        cmpnyName : '',
		messageFromServer: ''
      });
    }

onClick(e) {
      this.insertNewEvent(this);
    }
insertNewEvent(e) {
const { cmpnyName} = this.state;
	axios.post('/insertCompany',{ cmpnyName }).then((result) => {
        this.props.history.push("/")
      });
}
handleChange(e) {
const state = this.state;
state[e.target.name] = e.target.value;
    this.setState(state);
  }
render() {
	if(this.state.messageFromServer == ''){
		const {cmpnyName} = this.state;
    return (
	<div>
		<Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
		<Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Expense"
       className="Modal">
			<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
			   <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
			</Link><br />
			
				<label>
				  Company Name:
				  <input type="text" name= "cmpnyName" value={cmpnyName} onChange={this.handleChange} />
				</label>
			<div className='button-center'>
				<br/>
				<Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New Company</Button>
			   </div>
	   </Modal>
	</div>
    );
	}
	else{
		
		return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Add Expense"
        className="Modal">
<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>
        <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
         <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
        </Link>
       </div>
      </Modal>
       </div>
     );
	}

  }
}
export default AddCompany;

