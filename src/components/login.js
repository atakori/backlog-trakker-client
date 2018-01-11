import React from 'react';
import {NavigationBar} from './navbar';

export function Login(props) {
	return (
		<section className= "login_section">
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role= "main"> 
				<div className= "login_content" style= {{paddingTop: "65px"}}>
					<form className= "login_form">
						<h1 className= "form_title">Sign Up</h1>
						<label for = "username">Username </label>
						<input type= "text" name="username" id="username" />
						<label for= "password">Password </label>
						<input type= "password" name="password" id="password"/>
						<button type= "submit">Sign Up </button>
					</form>
				</div>
			</main>
		</section>
		)
}