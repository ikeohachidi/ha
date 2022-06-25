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
    const { data, isLoading, isError, isSuccess, error } = useQuery('location', async (): Promise<Location> => {
        const response = await fetch(locationUrl);
        return response.json();
    })

    return (
        <Overlay 
            isLoading={isLoading}
            onCloseIconClick={onCloseIconClick}
            children={
                data !== undefined
                ? <li>
                    <h4>Origin information</h4>
                    <Info>
                        <span>Name: </span>
                        <span>{ data.name }</span>
                    </Info>
                    <Info>
                        <span>Type:</span>
                        <span>{ data.type }</span>
                    </Info>
                    <Info>
                        <span>Dimension:</span>
                        <span>{ data.dimension }</span>
                    </Info>
                    <Info>
                        <span>No. of residents:</span>
                        <span>{ data.residents.length }</span>
                    </Info>
                </li>
                :<div></div>
            }
        />
    )
}

export default OriginListing;