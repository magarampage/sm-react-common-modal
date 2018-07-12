import React from 'react';
import { render } from 'react-dom';
import { ModalForm } from '../lib';

class App extends React.Component {
	handleModal = () => {
		this.setState(prevState => ({
			modal: !prevState.modal
		}))
	}

	render() {

		return (
			<div>
				<button openModal={this.handleModal}>open modal</button>
				{/*<ModalForm*/}
				{/*modalIsOpen={this.state.modal}*/}
				{/*title="Title"*/}
				{/*closeModal={this.handleModal}*/}
				{/*/>*/}
			</div>)
	}
}

App.propTypes = {}
App.defaultProps = {}

render(<App />, document.getElementById('root'));


/*
import React, { Component } from 'react';
import { render } from 'react-dom';
// import { ModalForm } from '../lib';

class App extends Component() {
	//
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		modal: false
	// 	}
	// }
	//
	// handleModal = () => {
	// 	this.setState(prevState => ({
	// 		modal: !prevState.modal
	// 	}))
	//
	// }

	render() {
		console.log('sdf');
		return (
			<div>
				<button onClick={this.handleModal}>open modal</button>
				{/!*<ModalForm*!/}
				{/!*modalIsOpen={this.state.modal}*!/}
				{/!*title="Title"*!/}
				{/!*closeModal={this.handleModal}*!/}
				{/!*!/>*!/}
			</div>)
	}
}

App.propTypes = {}
App.defaultProps = {}

render(<App />, document.getElementById('root'));
*/
