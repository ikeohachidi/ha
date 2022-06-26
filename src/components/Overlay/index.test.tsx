import { render } from "@testing-library/react";
import Overlay from ".";

const text = 'Football';

const factory = (isLoading: boolean) => render(
    <Overlay 
        isLoading={isLoading}
        onCloseIconClick={() => {}}
    >
        <p>{text}</p>
    </Overlay>
)

describe('Content', () => {
    it('should render children', () => {
        const component = factory(false)
        expect(component.baseElement.innerHTML).toContain(text);
    })

    it('should hide body text', async () => {
        const component = factory(true)
        expect(component.baseElement.innerHTML).not.toContain(text);
    })
})