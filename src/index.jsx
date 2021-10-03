import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <h2>Page principale à la racine</h2>
      <Switch>
        <Route path="/admin">
          <h3>Page admin</h3>
        </Route>
        <Route path="/">
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/survey">
            <Survey />
          </Route>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
