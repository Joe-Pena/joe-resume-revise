import React, { Component } from 'react';
import { Layout } from '../../layouts';
import { Welcome, About, Tech } from '../../organisms';

class App extends Component {
  render() {
    return (
      <Layout>
        <Welcome />
        <About />
        <Tech />
      </Layout>
    );
  }
}

export default App;
