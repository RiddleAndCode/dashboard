import React, { Component } from 'react';
import AppHeader from './components/header/AppHeader'
import Timeline from './containers/Timeline'
import AppFooter from './components/footer/AppFooter'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" >
      <AppHeader/>
      <Timeline/>
      <AppFooter/>
      </div>
    );
  }
}

export default App;
