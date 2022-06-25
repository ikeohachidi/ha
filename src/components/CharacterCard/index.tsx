import React from 'react';
import { Character, Status } from 'src/types';
import { 
	Card,
	Alive,
	Dead,
	Description
} from './style';

interface Props {
	character: Character
}

const CharacterCard = ({ character }: Props): JSX.Element => {
	return (
		<Card>
			<div>
				{/*ADD REdirect to single page link here*/}
				<img src={character.image} />

				<Description>
					<h2>{ character.name }</h2>
					<div className="quick-info">
						<p>{ character.species }</p>
						<p>
							{
								character.status === Status.ALIVE
								? <Alive/>
								: <Dead/>
							}
							{ character.status }
						</p>
					</div>
				</Description>
			</div>
			<div>
				<h4>Last known location</h4>
				<p>{ character.location.name }</p>

				<h4>No of episode appearances</h4>
				<p>{ character.episode.length }</p>
			</div>
		</Card>
	)
}

export default CharacterCard;