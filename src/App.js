import React, { Component } from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Frank from './components/Frank'
import Tyler from './components/Tyler'
import MacMiller from './components/MacMiller'

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <div>
            <nav>
              <Link to="/" className="home">
                Music Madness
              </Link>
            </nav>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/frank" component={Frank}></Route>
            <Route exact path="/tyler" component={Tyler}></Route>
            <Route exact path="/MacMiller" component={MacMiller}></Route>
          </div>
        </main>
        <footer>
          <h3 className="footer">©2019 Suncoast Developers Guild</h3>
        </footer>
      </Router>
    )
  }
}

export default App
