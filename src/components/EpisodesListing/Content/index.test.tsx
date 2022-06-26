import { render } from "@testing-library/react";
import Content from ".";
import { Episode } from "types";

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

describe('Content', () => {
    it('should be able to properly display single episode data', async () => {
        const component = render(<Content data={(singleEpisode as unknown) as Episode}/>)

        for (const [key, value] of Object.entries(singleEpisode)) {
            const el = await component.findByTestId(key);
            expect(el.innerHTML).toContain(value)
        }
    })

    it('should be able to display multiple episodes', async () => {
        const component = render(<Content data={(multipleEpisodes as unknown) as Episode[]}/>)

        for (let i = 0; i < multipleEpisodes.length; i++) {
            for (const [key, value] of Object.entries(multipleEpisodes[i])) {
                const els = await component.findAllByTestId(key);
                expect(els.at(i)?.innerHTML).toContain(value)
            }
        }
    })
})