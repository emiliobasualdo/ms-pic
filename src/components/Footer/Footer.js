import React from 'react';
import {FooterContainer, FooterText} from "./Footer.styles";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterText>Copyright &copy; { currentYear } - <strong>Más Simple S.A. </strong> - All rights reserved.</FooterText>
        </FooterContainer>
    );
}

export default Footer;