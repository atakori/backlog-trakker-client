import React from 'react';
import { LoggedInNav } from './loggedNav';
import { ShowUserBacklog } from './userBacklog';

export function GameCollection(props) {
	return (
		<section className= "game_collection_section"> 
			<header role= "banner">
				<LoggedInNav />
			</header>
			<main role= "main">
	        	<h2 className= "collection_title"> My Game Collection</h2>
				<ShowUserBacklog gameCollection= {["Doom", "Nioh", "The Lengend of Zelda, Breath of the Wild", "Splatoon 2", "Final Fantasy X", "Dark Souls 3",]} />
			</main>
		</section>
		)
}