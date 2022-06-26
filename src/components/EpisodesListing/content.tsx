import React from 'react';
import { SingleEpisode } from './style';
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
						<p className="episode">{ episode.episode }</p>
						<p className="info">
							<span className="name">{ episode.name }</span>
							<span className="air-date">{ episode.air_date }</span>
						</p>
					</SingleEpisode>
				))
			}
		</>
	}

	if (data) {
		<SingleEpisode>
			<p className="episode">{ (data as Episode).episode }</p>
			<p className="info">
				<span className="name">{ (data as Episode).name }</span>
				<span className="air-date">{ (data as Episode).air_date }</span>
			</p>
		</SingleEpisode>
	}

	return <p></p>

}

export default Content;