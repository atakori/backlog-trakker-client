import React, { Component } from 'react';
import {NavigationBar} from './navbar';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';

const renderInput = field => 
	<div>
		<input {...field.input} id= {field.id} type={field.type} className= "form_control" />
	</div>


class Login extends Component {
	handleFormSubmit({username, password}) {
		console.log(username, password)
		//log user in
		this.props.loginUser({username, password}, this.props.history);

	}

	renderError() {
		if(this.props.errorMessage) {
			return (
					<div className= "Incorrect Username or password">
						<p>{this.props.errorMessage} </p>
					</div>	
				)
		}
	}

	render() {
	const { handleSubmit } = this.props;

	return (
		<section className= "login_section">
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role= "main"> 
				<div className= "login_content" style= {{paddingTop: "65px"}}>
					<form className= "login_form" onSubmit= { handleSubmit(this.handleFormSubmit.bind(this))}>
						<h1 className= "form_title">Login</h1>
						{this.renderError()}
						<div className= "form_group">
							<label for = "username">Username </label>
							<Field id= "username" name= "username" component={renderInput} type= "text" />
						</div>
						<div className= "form_group">
							<label for= "password">Password </label>
							<Field id="password" name= "password" component={renderInput} type= "password" />
						</div>
						<button className= "btn btn-danger" type= "submit">Login</button>
					</form>
				</div>
			</main>
		</section>
		)
	}
}

function mapStateToProps(state) {
	return {errorMessage: state.auth.error }
}

export default reduxForm({
	form: 'login'
})(
 connect(mapStateToProps, actions)(Login)
 );