import React from 'react';
import { 
    Container,
    Overlay,
    Action,
    List
} from './style';

import CloseIcon from 'icons/CloseIcon';

interface Props {
    onCloseIconClick: () => void,
    isLoading: boolean,
    children: JSX.Element[] | JSX.Element,
}

export default ({ onCloseIconClick, children, isLoading }: Props) => {
    return (
        <Overlay>
            <Container>
                <Action>
                    <CloseIcon onClick={ onCloseIconClick }/>
                </Action>
                <List>
                    {
                        isLoading 
                        ? <p>Patience</p>
                        : children 
                    }
                </List>
            </Container>
        </Overlay>
    )
}