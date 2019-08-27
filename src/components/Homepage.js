import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { black } from 'ansi-colors'

export class Homepage extends Component {
  render() {
    return (
      <div>
        <ul className="links">
          <li>
            <Link to="/Frank" className="frank">
              Frank Ocean
            </Link>
          </li>
          <li>
            <Link to="/Tyler" className="tyler">
              Tyler the Creator
            </Link>
          </li>
          <li>
            <Link to="/MacMiller" className="mac">
              Mac Miller
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Homepage
