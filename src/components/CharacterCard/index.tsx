import React from 'react';
import { Character } from 'src/types';

interface Props {
	character: Character
}

const CharacterCard = ({ character }: Props): JSX.Element => {
	return (
		<li>
			<div>
				{/*ADD REdirect to single page link here*/}
				<img src={character.image} />
				<p>{ character.name }</p>
				<p>{ character.species }</p>
			</div>
			<div>

			</div>
		</li>
	)
}

export default CharacterCard;