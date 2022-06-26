import React from 'react';
import { useQuery } from 'react-query';
import { Episode, UrlString } from 'types';
import { 
    SingleEpisode,
} from './style';

import Overlay from 'components/Overlay';

interface Props {
    episodes: UrlString[],
    onCloseIconClick: () => void
}

const EpisodeListing = ({ episodes, onCloseIconClick }: Props) => {
    let EPISODES_API = 'https://rickandmortyapi.com/api/episode';
    const episodeIds = episodes.map(episode => {
        const s = episode.split('/');
        return s[s.length - 1]
    }).join(',');
    EPISODES_API += '/' + episodeIds;

    const { data, isLoading, isError, error } = useQuery('episodes', async (): Promise<Episode[] | Episode> => {
        const response = await fetch(EPISODES_API);
        return response.json();
    })

    const Content = () => {
        if (data) {
            if (data.constructor === Array) {
                return data.map((episode, index) => (
                    <SingleEpisode key={index}>
                        <p className="episode">{ episode.episode }</p>
                        <p className="info">
                            <span className="name">{ episode.name }</span>
                            <span className="air-date">{ episode.air_date }</span>
                        </p>
                    </SingleEpisode>
                ))
            } else {
                return <SingleEpisode>
                <p className="episode">{ (data as Episode).episode }</p>
                <p className="info">
                    <span className="name">{ (data as Episode).name }</span>
                    <span className="air-date">{ (data as Episode).air_date }</span>
                </p>
            </SingleEpisode>
            }
        }
        return <p></p>
    }

    return (
        <Overlay isLoading={isLoading} onCloseIconClick={onCloseIconClick}>
            { Content() }
        </Overlay>
    )
}

export default EpisodeListing;