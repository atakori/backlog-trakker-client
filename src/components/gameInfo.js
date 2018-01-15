import React from 'react';

export function GameInfo(props) {
	return ( 
		<div>
			<p>This is the specific game info</p>
			<p>{props.game}</p>
		</div>

		)
}