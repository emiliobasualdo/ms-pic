import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Container from '@material-ui/core/Container';
import { Router, Redirect } from "@reach/router";
import Business from "./components/Pages/Business/Business";
import Summary from "./components/Pages/Business/Summary/Summary";
import Total from './components/Pages/Business/Total/Total';
import Prepaid from "./components/Pages/Business/Prepaid/Prepaid";
import Traditional from "./components/Pages/Business/Traditional/Traditional";
import Recharges from "./components/Pages/Business/Recharges/Recharges";
import Consumptions from "./components/Pages/Business/Consumptions/Consumptions";
import Payment from "./components/Pages/Business/Payment/Payment";
import Clients from "./components/Pages/Clients/Clients";
import Zones from "./components/Pages/Zones/Zones";
import Balance from "./components/Pages/Balance/Balance";
import Coupons from "./components/Pages/Coupons/Coupons";
import Services from "./components/Pages/Services/Services";
import Promotions from "./components/Pages/Promotions/Promotions";
import Reports from "./components/Pages/Reports/Reports";

function App() {
  return (
      <>
          <Layout>
              <Container maxWidth="lg">
                  <Router>
                      <Redirect from ="/" to="negocio/total" noThrow />
                      <Business path="negocio">
                          <Redirect from="/" to="total" noThrow />
                          <Summary path="resumen" />
                          <Total path="total" />
                          <Prepaid path="prepago" />
                          <Traditional path="tradicional" />
                          <Recharges path="recargas" />
                          <Consumptions path="consumos" />
                          <Payment path="cobro" />
                      </Business>
                      <Clients path="clientes" />
                      <Zones path="zonas" />
                      <Balance path="balance" />
                      <Coupons path="cupones" />
                      <Services path="servicios" />
                      <Promotions path="promociones" />
                      <Reports path="informes" />
                  </Router>
              </Container>
          </Layout>
      </>
  )
}

export default App;
