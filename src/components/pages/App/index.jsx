import React, { Component } from 'react';
import { Layout } from '../../layouts';
import { Welcome, About, Tech, Projects } from '../../organisms';

class App extends Component {
  render() {
    return (
      <Layout>
        <Welcome />
        <About />
        <Tech />
        <Projects />
      </Layout>
    );
  }
}

export default App;
