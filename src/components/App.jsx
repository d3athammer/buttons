import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar'
import Counters from './Counters';

class App extends Component {


  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Counters />
      </React.Fragment>
    );
  }
}

export default App;
