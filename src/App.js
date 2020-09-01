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
    Customers,
    Consumptions,
    Payment,
    Prepaid,
    Recharges,
    Summary,
    Traditional,
    Zones,
    CustomersTotal,
    Current,
    New,
    CustomersTraditional,
    CustomersPrepaid,
    CustomersProfiles,
    ZonesTotal,
    ZonesProvinces,
    ZonesStores,
    ZonesRegistration,
    BalanceTotal,
    BalanceSettlements,
    BalanceReports,
    BalanceTaxes,
    BalanceConciliation,
    BalanceSchedule,
    Coupons,
    Services,
    Promotions,
    Reports
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
                        <Router primary={false} style={{paddingBottom: '50px'}}>
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
                            <Customers path="clientes">
                                <Redirect from ="/" to="total" noThrow/>
                                <CustomersTotal path="total"/>
                                <Current path="actuales"/>
                                <New path="nuevos"/>
                                <CustomersTraditional path="tradicionales"/>
                                <CustomersPrepaid path="prepagos"/>
                                <CustomersProfiles path="perfiles" />
                            </Customers>
                            <Zones path="zonas">
                                <Redirect from ="/" to="total" noThrow/>
                                <ZonesTotal path="total"/>
                                <ZonesProvinces path="provincias"/>
                                <ZonesStores path="comercios"/>
                                <ZonesRegistration path="alta"/>
                            </Zones>
                            <Balance exact path="balance">
                                <Redirect from ="/" to="total" noThrow/>
                                <BalanceTotal path="total"/>
                                <BalanceSettlements path="liquidaciones"/>
                                <BalanceReports path="reportes"/>
                                <BalanceTaxes path="impuestos"/>
                                <BalanceConciliation path="conciliacion"/>
                                <BalanceSchedule path="agenda"/>
                            </Balance>
                            <Coupons exact path="cupones">
                                <Redirect from ="/" to="resumen" noThrow/>
                            </Coupons>
                            <Services exact path="servicios">
                                <Redirect from ="/" to="total" noThrow/>
                            </Services>
                            <Promotions exact path="promociones">
                                <Redirect from ="/" to="total" noThrow/>
                            </Promotions>
                            <Reports exact path="informes">
                                <Redirect from ="/" to="resumen" noThrow/>
                            </Reports>
                        </Router>
                    </Container>
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default App;