import React from 'react';
import { SingleEpisode } from '../style';
import { Episode } from 'types';

interface Props {
	data?: Episode | Episode[]
}

const Content = ({ data }: Props) => {
	if (data && data.constructor === Array) {
		return <>
			{
				data.map((episode, index) => (
					<SingleEpisode key={index}>
						<p className="episode" data-testid="episode">{ episode.episode }</p>
						<p className="info">
							<span className="name" data-testid="name">{ episode.name }</span>
							<span className="air-date" data-testid="air_date">{ episode.air_date }</span>
						</p>
					</SingleEpisode>
				))
			}
		</>
	}

	if (data) {
		return <SingleEpisode>
			<p className="episode" data-testid="episode">{ (data as Episode).episode }</p>
			<p className="info">
				<span className="name" data-testid="name">{ (data as Episode).name }</span>
				<span className="air-date" data-testid="air_date">{ (data as Episode).air_date }</span>
			</p>
		</SingleEpisode>
	}

	return <p></p>

}

export default Content;