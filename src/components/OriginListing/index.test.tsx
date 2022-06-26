import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import OriginListing from ".";
import { Location } from "types";

const queryClient = new QueryClient();
const URL = "https://rickandmortyapi.com/api/location/3";

const wrapper = (props: { children: JSX.Element }) => render(
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
)

const location: Partial<Location> = {
    name: 'john',
    type: 'james',
    dimension: 'ruga',
    residents: ['rick', 'morty']
}

const server = setupServer(
    rest.get(URL, (req, res, ctx) => {
        return res(ctx.json(location))
    }),
)

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('OriginListing', () => {
    it('should show the proper content on the screen', async () => {
        const component = wrapper(
            { 
                children: <OriginListing locationUrl={URL} onCloseIconClick={() => {}}></OriginListing>
            }
        )

        for (const [ key, value ] of Object.entries(location)) {
            const el = await component.findByTestId(key);
            if (key === 'residents') {
                expect(el.innerHTML).toContain(value.length.toString());
            } else {
                expect(el.innerHTML).toContain(value);
            }
        }
    })
})