import React, { Component } from 'react';
import Top from './top'
import ErrorBoundary from './errorBoundary'
import { Middle } from './middle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Top />
        </ErrorBoundary>
        <Middle />
      </div>
    );
  }
}

export default App