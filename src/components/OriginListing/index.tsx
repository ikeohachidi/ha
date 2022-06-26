import React from 'react';
import { useQuery } from 'react-query';
import {UrlString, Location } from 'types';
import { Info } from './style';

import Overlay from 'components/Overlay';

interface Props {
    locationUrl: UrlString,
    onCloseIconClick: () => void
}

const OriginListing = ({ locationUrl, onCloseIconClick }: Props) => {
    const { data, isFetching, isError } = useQuery('location', async (): Promise<Location> => {
        const response = await fetch(locationUrl);
        if (!response.ok) {
            throw new Error();
        }
        return response.json();
    })

    return (
        <Overlay isLoading={isFetching} onCloseIconClick={onCloseIconClick}>
            {
                (!isError && data)
                ? <li>
                    <h4>Origin information</h4>
                    <Info data-testid="name">
                        <span>Name: </span>
                        <span>{ data.name }</span>
                    </Info>
                    <Info data-testid="type">
                        <span>Type:</span>
                        <span>{ data.type }</span>
                    </Info>
                    <Info data-testid="dimension">
                        <span>Dimension:</span>
                        <span>{ data.dimension }</span>
                    </Info>
                    <Info data-testid="residents">
                        <span>No. of residents:</span>
                        <span>{ data.residents.length }</span>
                    </Info>
                </li>
                : <h4>Sorry couldn't retrieve origin information, try again later.</h4>
            }
        </Overlay>
    )
}

export default OriginListing;