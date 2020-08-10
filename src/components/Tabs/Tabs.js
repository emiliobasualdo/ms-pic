import React, { useState, useEffect } from 'react';
import { Link } from "@reach/router";
import {LiContainer, StyledLi, StyledUl, TabsContainer} from "./TabsStyles";
import ArrowRight from "@material-ui/icons/ArrowRight";

const Tabs = ({ tabItems }) => {
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

    return (
        <>
            {show && (
                <TabsContainer>
                    <nav>
                        <StyledUl>
                            {tabItems.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Link
                                            to={item.path}
                                            style={{ textDecoration: 'none', color: '#000' }}
                                            onClick={() => handleClick()}>
                                            <LiContainer>
                                                {window.location.href.includes(item.path) && <ArrowRight />}
                                                <StyledLi>{ item.textContent }</StyledLi>
                                            </LiContainer>
                                        </Link>
                                    </React.Fragment>
                                )
                            })}
                        </StyledUl>
                    </nav>
                </TabsContainer>
            )}
        </>
    )
}

export default Tabs;
