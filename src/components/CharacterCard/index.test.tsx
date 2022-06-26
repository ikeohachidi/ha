import { render } from "@testing-library/react";
import { Character, Species, Status, Gender } from "types";
import CharacterCard from ".";

const character: Character = {
    name: 'john',
    species: Species.ALIEN,
    status: Status.ALIVE,
    gender: Gender.FEMALE,
    image: '',
    url: '',
    origin: {
        name: 'Earth',
        url: 'https://earth.org'
    },
    location: {
        name: 'Milky way',
        url: ''
    },
    episode: ['a', 'b']
};

const factory = () => render(
    <CharacterCard
        character={character}
        onEpisodeClick={() => {}}
        onOriginClick={() => {}}
    />
)

describe('CharacterCard', () => {
    it('should render content', () => {
        const component = factory();

        const {
            image,
            name,
            species,
            origin,
            location,
            episode
        } = character;
    
        expect(component.getByTestId('image').getAttribute('src')) .toBe(image);
        expect(component.getByTestId('name').innerHTML).toContain(name);
        expect(component.getByTestId('species').innerHTML).toContain(species);
        expect(component.getByTestId('origin').innerHTML).toContain(origin.name);
        expect(component.getByTestId('location-name').innerHTML).toContain(location.name);
        expect(component.getByTestId('episode').innerHTML).toContain(episode.length.toString());

    })

})