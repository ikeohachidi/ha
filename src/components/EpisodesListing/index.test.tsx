import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import EpisodesListing from ".";
import { Episode } from "types";

const queryClient = new QueryClient();
const URL = "https://rickandmortyapi.com/api/episode";

const wrapper = (props: { children: JSX.Element }) => render(
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
)

const singleEpisode: Partial<Episode> = {
    episode: 'mclaren',
    name: 'bmw',
    air_date: '2022'
}

const multipleEpisodes : Partial<Episode>[] = [
    {
        episode: 'breakfast',
        name: 'launch',
        air_date: '2022'
    },
    {
        episode: 'curry',
        name: 'nba',
        air_date: '2022'
    }
]

const server = setupServer(
    rest.get(URL + '/1', (req, res, ctx) => {
        return res(ctx.json(singleEpisode))
    }),
    rest.get(URL + '/2,3,4', (req, res, ctx) => {
        return res(ctx.json(multipleEpisodes))
    }),
)

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('EpisodeListing', () => {
    it('should show the proper single content on the screen', async () => {
        const episodes = ['https://rickandmortyapi.com/api/episode/1'];
        const component = wrapper(
            { 
                children: <EpisodesListing 
                    episodes={episodes} 
                    onCloseIconClick={() => {}}
                ></EpisodesListing>
            }
        )

        for (const [key, value] of Object.entries(singleEpisode)) {
            const el = await component.findByTestId(key);
            expect(el.innerHTML).toContain(value)
        }
    })

    it('should show proper multiple content', async () => {
        const episodes = [2, 3, 4].map((value) => 'https://rickandmortyapi.com/api/episode/' + value);
        const component = wrapper(
            { 
                children: <EpisodesListing 
                    episodes={episodes} 
                    onCloseIconClick={() => {}}
                ></EpisodesListing>
            }
        )

        for (let i = 0; i < multipleEpisodes.length; i++) {
            for (const [key, value] of Object.entries(multipleEpisodes[i])) {
                const els = await component.findAllByTestId(key);
                expect(els.at(i)?.innerHTML).toContain(value)
            }
        }
    })
})