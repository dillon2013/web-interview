import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.png'
import { API_ENDPOINT } from './config'

import './App.scss'
import { NewAppointment } from './components/newAppointment/NewAppointment'
import { Appointments } from './components/appointment/Appointment'
import { Home } from './components/home/Home'

class App extends Component {
  componentDidMount() {
    fetch(`${API_ENDPOINT}/users/1`)
      .then(res => res.json())
      .then(() => {
        // TODO: Handle response here
      })
      .catch(() => {
        // TODO: Handle error here
      })
  }

  render() {
    return (
      <div className="app">
        <Router>
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/new-appointment/">Book</Link>
                </li>
                <li>
                  <Link to="/appointments/">Appointments</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Route path="/" exact component={Home} />
          <Route path="/new-appointment/" component={NewAppointment} />
          <Route path="/appointments/" component={Appointments} />
        </Router>
      </div>
    )
  }
}

export default App
