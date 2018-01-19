import React from 'react';
import {NavigationBar} from './navbar';
import { reduxForm } from 'redux-form';

export class Login extends React.Component {
	render() {
	return (
		<section className= "login_section">
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role= "main"> 
				<div className= "login_content" style= {{paddingTop: "65px"}}>
					<form className= "login_form">
						<h1 className= "form_title">Sign Up</h1>
						<fieldset className= "form_group">
							<label for = "username">Username </label>
							<input className= "form_control" type= "text" name="username" id="username" />
						</fieldset>
						<fieldset className= "form_group">
							<label for= "password">Password </label>
							<input className= "form_control" type= "password" name="password" id="password"/>
						</fieldset>
						<button className= "btn btn-danger" type= "submit">Login</button>
					</form>
				</div>
			</main>
		</section>
		)
	}
}

export default reduxForm({
	form: 'login',
	fields: ['username', 'password']
})(Login)