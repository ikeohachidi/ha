import React from 'react';
import { Character, Status, UrlString } from 'types';
import { 
	Card,
	Alive,
	Dead,
	Description,
	Metadata
} from './style';
import ArrowTopRightIcon from 'icons/ArrowTopRightIcon';

interface Props {
	character: Character,
	onEpisodeClick: (episodes: UrlString[]) => void;
}

const CharacterCard = ({ character, onEpisodeClick }: Props): JSX.Element => {
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
			<Metadata>
				<h4>Last known location</h4>
				<h3 className="info">{ character.location.name }</h3>

				<h4>No of episode appearances</h4>
				<h3 className="info">
					{ character.episode.length }
					<ArrowTopRightIcon onClick={ () => onEpisodeClick(character.episode) }/>
				</h3>
			</Metadata>
		</Card>
	)
}

export default CharacterCard;