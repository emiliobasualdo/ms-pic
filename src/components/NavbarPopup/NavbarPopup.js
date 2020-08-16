import React, { useState } from 'react';
import { PopupWrapper, Content, Heading, List } from "./NavbarPopup.styles";

const NavbarPopup = ({ name }) => {
    let heading;
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    switch (name) {
        case 'notifications':
            heading = 'Mensajes';
            break;
        case 'tasks':
            heading = 'Tareas';
            break;
        case 'chat':
            heading = 'Chat';
            break;
        default:
            heading = '';
            break;
    }

    return (
        <PopupWrapper>
            <Heading>{ heading }</Heading>
            <Content>
                { loading ? <p>Loading</p> : (
                    <List>
                        <li>Test</li>
                        <li>Test</li>
                        <li>test</li>
                    </List>
                )}
            </Content>
        </PopupWrapper>
    )
}

export default NavbarPopup;
