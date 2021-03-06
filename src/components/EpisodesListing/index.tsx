import React from 'react';
import { useQuery } from 'react-query';
import { Episode, UrlString } from 'types';

import Overlay from 'components/Overlay';
import Content from './Content';

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

    const { data, isFetching, isError } = useQuery('episodes', async (): Promise<Episode[] | Episode> => {
        const response = await fetch(EPISODES_API);
        if (!response.ok) {
            throw new Error();
        }
        return response.json();
    })

    return (
        <Overlay isLoading={isFetching} onCloseIconClick={onCloseIconClick}>
            {
                isError
                ? <h4>Error retrieving episodes</h4>
                : <Content data={data}/>
            }
        </Overlay>
    )
}

export default EpisodeListing;