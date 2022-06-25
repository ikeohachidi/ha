import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ApiResponse, Character, UrlString } from './types';
import { AppShell, CardsWrapper } from './App.style';

import CharacterCard from 'components/CharacterCard';
import EpisodesListing from 'components/EpisodesListing';
import OriginListing from 'components/OriginListing';

function App() {
  const CHARACTER_API = 'https://rickandmortyapi.com/api/character';
  const { data, isLoading, isError, error, isSuccess } = useQuery('characters', async (): Promise<ApiResponse<Character[]>> => {
    const response = await fetch(CHARACTER_API);
    return response.json();
  })

  const [ showEpisodes, setShowEpisodes ] = useState(false);
  const [ characterEpisodes, setCharacterEpisodes ] = useState<UrlString[]>([]);
  const [ showOrigin, setShowOrigin ] = useState(false)
  const [ characterOrigin, setCharacterOrigin ] = useState<UrlString>('');

  const openEpisodesScreen = (episodes: UrlString[]) => {
    setShowEpisodes(true);
    setCharacterEpisodes(episodes);
  }

  const openOriginScreen = (origin: UrlString) => {
    setShowOrigin(true);
    setCharacterOrigin(origin)
  }

  if (isLoading) {
    return <p>Loading page please wait.</p>
  }

  if (isError && error) {
    return <div>it seems an error occured</div>
  }

  if (isSuccess && data) {
    return (
      <AppShell>
        {
          showEpisodes && <EpisodesListing 
            episodes={characterEpisodes} 
            onCloseIconClick={() => { setShowEpisodes(false) }}
          />
        }
        {
          showOrigin && <OriginListing
            locationUrl={characterOrigin}
            onCloseIconClick={() => { setShowOrigin(false) }}
          />
        }
        <CardsWrapper>
          {
            data.results.map((character, index) => (
              <CharacterCard 
                key={index}
                character={character} 
                onEpisodeClick={openEpisodesScreen}
                onOriginClick={openOriginScreen}
              />
            ))
          }
        </CardsWrapper>
      </AppShell>
    );
  }

  return <p></p>
}

export default App;
