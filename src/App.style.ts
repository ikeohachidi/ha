import styled from 'styled-components';

export const AppShell = styled.div`
    padding: 40px;
`

export const CardsWrapper = styled.ul`
    max-width: 1920px;
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px,  1fr));
    gap: 30px;
`