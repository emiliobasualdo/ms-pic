import React from 'react';
import { Link } from "@reach/router";
import {LiContainer, StyledLi, StyledUl, TabsContainer} from "./TabsStyles";
import ArrowRight from "@material-ui/icons/ArrowRight";

const Tabs = ({ tabItems }) => {
    return (
        <>
            <TabsContainer>
                <nav>
                    <StyledUl>
                        {tabItems.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Link to={item.path} style={{ textDecoration: 'none', color: '#000' }}>
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
        </>
    )
}

export default Tabs;
