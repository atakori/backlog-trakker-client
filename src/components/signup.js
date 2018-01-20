import React from 'react';
import NavigationBar from './navbar';

export function SignUp(props) {
	return (
		<section className= "signup_section">
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role= "main"> 
				<div className= "signup_content" style= {{paddingTop: "65px"}}>
					<form className= "sign_up_form">
						<h1 className= "form_title">Sign Up</h1>
						<label for= "first_name" >First Name </label>
						<input type= "text" name="first_name" id="first_name"/>
						<label for= "last_name" >Last Name </label>
						<input type= "text" name="last_name" id="last_name"/>
						<label for= "user_name" >Username </label>
						<input type= "text" name="username" id="username"/>
						<label for= "password" >Password </label>
						<input type= "password" name="password" id="password"/>
						<label for= "confirm_pass" >Confirm Password </label>
						<input type= "password" name="confirm_pass" id="confirm_pass"/>
						<button type= "submit">Sign Up </button>
					</form>
				</div>
			</main>
		</section>
		)
	}