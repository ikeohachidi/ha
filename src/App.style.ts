import styled from 'styled-components';

export const AppShell = styled.div`
    padding: 40px;
`

export const CardsWrapper = styled.div`
    max-width: 1920px;
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
`