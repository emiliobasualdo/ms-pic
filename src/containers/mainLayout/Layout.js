import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {LayoutContainer} from './Layout.styles';

const Layout = ({children}) => {
    return(
        <LayoutContainer>
            <Header/>
                {children}
            <Footer/>
        </LayoutContainer>
    );
}

export default Layout;