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
	onOriginClick: (origin: UrlString) => void;
}

const CharacterCard = ({ character, onOriginClick, onEpisodeClick }: Props): JSX.Element => {
	return (
		<Card>
			<div>
				<img src={character.image} alt={character.name}/>

				<Description>
					<h2>{ character.name }</h2>
					<div className="quick-info">
						<p>{ character.species }</p>
						<div>
							{
								character.status === Status.ALIVE
								? <Alive/>
								: <Dead/>
							}
							{ character.status }
						</div>
					</div>
				</Description>
			</div>
			<Metadata>
				<h3>Origin</h3>
				<h4 className="info">
					{ character.origin.name }
					{
						character.origin.url &&
						<ArrowTopRightIcon onClick={ () => onOriginClick(character.origin.url) }/>
					}
				</h4>
			
				<h3>Last known location</h3>
				<h4 className="info">{ character.location.name }</h4>

				<h3>No of episode appearances</h3>
				<h4 className="info">
					{ character.episode.length }
					<ArrowTopRightIcon onClick={ () => onEpisodeClick(character.episode) }/>
				</h4>
			</Metadata>
		</Card>
	)
}

export default CharacterCard;