import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Container from '@material-ui/core/Container';
import { Router, Redirect } from "@reach/router";
import Business from "./components/Pages/Business/Business";
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
                      <Redirect from ="/" to="negocio" noThrow />
                      <Business path="negocio" />
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
