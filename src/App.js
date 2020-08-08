import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Container from '@material-ui/core/Container';

function App() {
  return (
      <>
        <Layout>
          <Container maxWidth="lg">
              {/* Aca va lo que va en cada ruta */}
              Content
          </Container>
        </Layout>
      </>
  )
}

export default App;
