import React, { Component } from 'react';
import {NavigationBar} from './navbar';
import { reduxForm, Field } from 'redux-form';

const renderInput = field => 
	<div>
		<input {...field.input} id= {field.id} type={field.type} className= "form_control" />
	</div>


class Login extends Component {
	handleFormSubmit({username, password}) {
		console.log(username, password)
		//log user in
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
						<h1 className= "form_title">Sign Up</h1>
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

export default reduxForm({
	form: 'login'
})(Login)