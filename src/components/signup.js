import React from 'react';
import NavigationBar from './navbar';
import * as actions from '../actions';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

function renderInput(field) { 
	return (<div>
		{field.meta.touched && field.meta.error && <span className="signup_error">{field.meta.error}</span>}
		<input {...field.input} type={field.type} className="form-control" />
    </div>
	)
}

export class SignUp extends React.Component {

	handleFormSubmit(formProps) {
		//call action to create account in backend
		this.props.signupUser(formProps, this.props.history)
	}

	renderError() {
		if(this.props.errorMessage) {
			return (
					<div className= "error_message">
						<p>{this.props.errorMessage} </p>
					</div>	
				)
		}
	}

	handlefieldsWarning(firstname,lastname,username,password,passwordConfirm) {
		if(firstname === undefined | lastname === undefined | username === undefined | password === undefined |passwordConfirm) {

		} 
	}

	render(){
		const {handleSubmit, fields: {firstname, lastname, username, password, passwordConfirm}} = this.props;
	return (
		<section className= "signup_section">
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role= "main"> 
				<div className= "signup_content" style= {{paddingTop: "65px"}}>
					<form className= "sign_up_form" onSubmit= {handleSubmit(this.handleFormSubmit.bind(this))}>
						<h1 className= "signup_form_title">Sign Up</h1>
						<hr className= "signup_line_style2" />
						{this.renderError()}
						<div className= "form_group"> 
							<label className= "signup_label" htmlFor= "first_name" >First Name </label>
							<Field id= "first_name" name= "first_name" component={renderInput} type= "text" />
						</div>
						<div className= "form_group"> 
							<label className= "signup_label" htmlFor= "last_name" >Last Name </label>
							<Field id= "last_name" name= "last_name" component={renderInput} type= "text" />
						</div>
						<div className= "form_group"> 
							<label className= "signup_label" htmlFor= "user_name" >Username </label>
							<Field id= "username" name= "username" component={renderInput} type= "" />
						</div>
						<div className= "form_group"> 
							<label className= "signup_label" htmlFor= "password" >Password </label>
							<Field id= "password" name= "password" component={renderInput} type= "password" />
						</div>
						<div className= "form_group"> 
							<label className= "signup_label" htmlFor= "passwordConfirm" >Confirm Password </label>
							<Field id= "passwordConfirm" name= "passwordConfirm" component={renderInput} type= "password" />
						</div>
						<hr className= "signup_line_style2" />
						<div className= "signup_button_container">
						<button type= "submit" className= "signup_button btn btn-danger">Sign Up </button>
						</div>
					</form>
						<div className= "signup_character_container">
							<img width= "270" height= "220" className= "signup_character" src= "./images/sonic.jpg" alt= "login character" />
						</div>
					</div>
			</main>
			{this.handlefieldsWarning(firstname,lastname,username,password,passwordConfirm)}
		</section>
		)
	}
}

function validate(formProps) {
	const errors= {};
		if (!formProps.username) {
			errors.username= 'Please enter a username';
		}

		if (!formProps.password) {
			errors.username= 'Please enter a password';
		}

		if (!formProps.passwordConfirm) {
			errors.username= 'Please enter a password confirmation';
		}

		if(formProps.password !== formProps.passwordConfirm) {
			errors.passwordConfirm = 'Passwords must match';
		}
	return errors
}

function mapStateToProps(state) {
	return {
		errorMessage: state.auth.error
	}
}

export default reduxForm({
	form: 'signup',
	fields: ['firstname', 'lastname', 'username', 'password', 'passwordConfirm'],
	validate: validate
})(
 connect(mapStateToProps, actions)(SignUp)
 );