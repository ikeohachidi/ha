import React from 'react';
import { 
    Container,
    Overlay,
    Action,
    List
} from './style';

import CloseIcon from 'icons/CloseIcon';
import Spinner from 'components/Spinner';

interface Props {
    onCloseIconClick: () => void,
    isLoading: boolean,
    children: JSX.Element[] | JSX.Element,
}

const Component = ({ onCloseIconClick, children, isLoading }: Props) => {
    return (
        <Overlay>
            <Container>
                <Action>
                    <CloseIcon onClick={ onCloseIconClick }/>
                </Action>
                <List>
                    {
                        isLoading 
                        ? <Spinner/>
                        : children 
                    }
                </List>
            </Container>
        </Overlay>
    )
}

export default Component