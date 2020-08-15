import React from 'react';
import {createGlobalStyle, ThemeProvider, css} from 'styled-components';
import baseTheme from './themes/baseTheme';
import Container from '@material-ui/core/Container';
import {Router, Redirect} from "@reach/router";
//Layout
import Layout from './layouts/mainLayout/Layout';
//Pages
import {
    Balance,
    Business,
    Total,
    Clients,
    Consumptions,
    Coupons,
    Payment,
    Prepaid,
    Promotions,
    Recharges,
    Reports,
    Services,
    Summary,
    Traditional,
    Zones
} from './pages';

const GlobalStyle = createGlobalStyle(({theme}) => {
    return css`
        *{
            margin: 0;
            padding: 0;
            font-family: ${theme.typography.fonts.primary};
        }
    `;
});

const App = () => {
    return(
        <>
            <ThemeProvider theme={baseTheme}>
                <GlobalStyle/>
                <Layout>
                    <Container maxWidth="lg" style={{ minHeight: '100vh'}}>
                        <Router style={{paddingBottom: '50px'}}>
                        <Redirect from ="/" to="negocio" noThrow/>
                            <Business path="negocio">
                                <Redirect from ="/" to="total" noThrow/>
                                <Summary path="resumen"/>
                                <Total path="total"/>
                                <Prepaid path="prepago"/>
                                <Traditional path="tradicional"/>
                                <Recharges path="recargas"/>
                                <Consumptions path="consumos"/>
                                <Payment path="cobro"/>
                            </Business>
                            <Clients exact path="clientes"/>
                            <Zones exact path="zonas"/>
                            <Balance exact path="balance"/>
                            <Coupons exact path="cupones"/>
                            <Services exact path="servicios"/>
                            <Promotions exact path="promociones"/>
                            <Reports exact path="informes"/>
                        </Router>
                    </Container>
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default App;