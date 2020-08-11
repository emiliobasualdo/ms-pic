import React, { useState, useEffect } from 'react';
import {LiContainer, StyledLi, StyledUl, TabsContainer, TheLink} from "./Tabs.styles";
import ArrowRight from "@material-ui/icons/ArrowRight";

const Tabs = ({tabItems}) => {
    const [show, setShow] = useState(true);
    const [location, setLocation] = useState(window.location.href);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
            setShow(true);
        }, 0);
    }, [location]);

    const handleClick = () => {
        setTimeout(() => {
            setLocation(window.location.href);
        }, 0);
    }

    return(
        <>
            {show && (
                <TabsContainer>
                    <nav>
                        <StyledUl>
                            {tabItems.map((item, index) => {
                                return (
                                    <TheLink
                                        key={index}
                                        to={item.path}
                                        onClick={() => handleClick()}>
                                        <LiContainer>
                                            {window.location.href.includes(item.path) && <ArrowRight/>}
                                            <StyledLi>{item.textContent}</StyledLi>
                                        </LiContainer>
                                    </TheLink>
                                )
                            })}
                        </StyledUl>
                    </nav>
                </TabsContainer>
            )}
        </>
    );
}

export default Tabs;