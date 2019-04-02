import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.png'
import { API_ENDPOINT } from './config'

import './App.scss'
import { NewAppointment } from './components/newAppointment/NewAppointment'
import { Appointments } from './components/appointment/Appointments'
import { Home } from './components/home/Home'

class App extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    fetch(`${API_ENDPOINT}/users/1`)
      .then(res => res.json())
      .then((user) => {
        // TODO: Handle response here
        this.setState(() => ({user}))
        console.log(user)
      })
      .catch(() => {
        // TODO: Handle error here
      })
  }

  render() {
    const { user } = this.state;
    return (
      <div className="app">
        <Router>
          <header className="app-header">
            <div className="logo">
              <Link to="/"><img src={logo} className="app-logo" alt="logo" /></Link>
            </div>

            <nav className="nav">
              <ul>
                <li>
                  <Link to="/new-appointment"><i className="far fa-calendar-plus" /> Book</Link>
                </li>
                <li>
                  <Link to="/appointments"><i className="far fa-calendar-alt" /> Appointments</Link>
                </li>
                <li>
                  <Link to="/"><i className="fas fa-user-friends" /> Family Members</Link>
                </li>
              </ul>
            </nav>

            <div className="profile">
              <span>{user && user.firstName && user.firstName[0].toUpperCase()}{user && user.lastName && user.lastName[0].toUpperCase()}</span>
            </div>
          </header>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/new-appointment/" component={() => <NewAppointment user={user}/>} />
            <Route path="/appointments/" component={Appointments} />
          </main>
        </Router>
      </div>
    )
  }
}

export default App
