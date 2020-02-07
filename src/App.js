import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Resume from './components/history/Resume'
import About from './components/About'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      farmToggle: 'Collapsed',
      russiaToggle: 'Collapsed',
      familyToggle: 'Collapsed',
      hobbyToggle: 'Collapsed',
      quoteToggle: 'Collapsed',
    }
  }

  
  render() {
    const styles = {
      app: {
        display: 'grid',
        justifyContent: 'center',
        fontSize: '22px'
      }
    }
    return (
      <div style={styles.app}>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Landing />} />
          <Route path='/history' component={() => <Resume />} />
          <Route path='/about' component={() => <About {...this.state} />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
