import React from 'react';
import { useQueryClient, useQuery } from 'react-query';
import { ApiResponse, Character } from './types';

import CharacterCard from './components/CharacterCard';

function App() {
  const API = 'https://rickandmortyapi.com/api/character';
  const { data, isLoading, isError, error, isSuccess } = useQuery('characters', async (): Promise<ApiResponse<Character[]>> => {
    const response = await fetch(API);
    return response.json();
  })

  if (isLoading) {
    return <p>Loading page please wait.</p>
  }

  if (isError && error) {
    return <div>it seems an error occured</div>
  }

  if (isSuccess && data) {
    return (
      <div className="App">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {
            data.results.map((character, index) => {
              return <CharacterCard character={character}/>
            })
          }
        </ul>
      </div>
    );
  }

  return <p></p>
}

export default App;
