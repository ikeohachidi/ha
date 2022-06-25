import React from 'react';
import { useQuery } from 'react-query';
import { Episode, UrlString } from 'types';
import { 
    Container,
    Overlay,
    SingleEpisode,
    Action,
    Episodes
} from './style';

import CloseIcon from 'icons/CloseIcon';

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

    const { data, isLoading, isError, isSuccess, error } = useQuery('episodes', async (): Promise<Episode[]> => {
        const response = await fetch(EPISODES_API);
        return response.json();
    })

    if (isLoading) {
        return (
            <p>Please wait.</p>
        )
    }

    if (data && !isLoading) {
        return (
            <Overlay>
                <Container>
                    <Action>
                        <CloseIcon onClick={ onCloseIconClick }/>
                    </Action>
                    <Episodes>
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
                    </Episodes>
                </Container>
            </Overlay>
        )
    }

    return <></>
}

export default EpisodeListing;