import React from 'react';
import { LoggedInNav } from './loggedNav'

export function GameCollection(props) {
	return (
		<section class= "game_collection_section"> 
			<header role= "banner">
				<LoggedInNav />
			</header>
			<main role= "main">
	        	<h2 class= "collection_title"> My Game Collection</h2>
				<p> This is the Game Collection Page </p>
			</main>
		</section>
		)
}