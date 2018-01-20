import React from 'react';
import NavigationBar from './navbar';
import * as actions from '../actions';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

function renderInput(field) { 
	return (<div>
		{field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
		<input {...field.input} type={field.type} className="form-control" />
    </div>
	)
}

class SignUp extends React.Component {

	handleFormSubmit(formProps) {
		//call action to create account in backend
		this.props.signupUser(formProps)
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
						<h1 className= "form_title">Sign Up</h1>
						<div className= "form_group"> 
							<label for= "first_name" >First Name </label>
							<Field id= "first_name" name= "first_name" component={renderInput} type= "text" />
						</div>
						<div className= "form_group"> 
							<label for= "last_name" >Last Name </label>
							<Field id= "last_name" name= "last_name" component={renderInput} type= "text" />
						</div>
						<div className= "form_group"> 
							<label for= "user_name" >Username </label>
							<Field id= "username" name= "username" component={renderInput} type= "" />
						</div>
						<div className= "form_group"> 
							<label for= "password" >Password </label>
							<Field id= "password" name= "password" component={renderInput} type= "password" />
						</div>
						<div className= "form_group"> 
							<label for= "passwordConfirm" >Confirm Password </label>
							<Field id= "passwordConfirm" name= "passwordConfirm" component={renderInput} type= "password" />
						</div>
						<button type= "submit" className= "btn btn-danger">Sign Up </button>
					</form>
				</div>
			</main>
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

export default reduxForm({
	form: 'signup',
	fields: ['firstname', 'lastname', 'username', 'password', 'passwordConfirm'],
	validate: validate
})(
 connect(null, actions)(SignUp)
 );