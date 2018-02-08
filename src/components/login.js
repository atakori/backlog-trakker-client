import React, { Component } from 'react';
import NavigationBar from './navbar';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Footer from './footer';

const renderInput = field => 
	<div>
		<input {...field.input} id= {field.id} type={field.type} className= "form_control login_input" />
	</div>


export class Login extends Component {
	handleFormSubmit({username, password}) {
		//log user in
		this.props.loginUser({username, password}, this.props.history);
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

	componentWillUnmount() {
		if (this.props.errorMessage) {
   			this.props.authError(null)
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
						<hr className="style2"/>
						{this.renderError()}
						<div className= "form_group">
							<label className= "login_label" htmlFor = "username">Username </label>
							<Field id= "username" name= "username" component={renderInput} type= "text" />
						</div>
						<div className= "form_group">
							<label  className= "login_label" htmlFor= "password">Password </label>
							<Field id="password" name= "password" component={renderInput} type= "password" />
						</div>
						<hr className="style2"/>
						<button className= "login_button btn btn-danger" type= "submit">Login</button>
					</form>
				</div>
				<div className= "login_character_container">
					<img width= "300" height= "300" className= "login_character" src= "Pac-man.png" alt= "login character" />
				</div>
			</main>
			<Footer />
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