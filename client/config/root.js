/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect, StaticRouter } from 'react-router-dom'

import store, { history } from '../redux'

import Home from '../components/home'
import Dashboard from '../components/dashboard'
import NotFound from '../components/404'


import Startup from './startup'
import Firth from '../components/first/firth'
import Second from '../components/second/second'
import Third from "../components/third/third"
import Forth from "../components/forth/forth"
import Fifth from "../components/fifth/fifth"
import Sixth from "../components/sixth/sixth"
import Seventh from "../components/seventh/seventh"
import Eighth from "../components/eighth/eighth"
import Ninth from "../components/ninth/ninth"

const OnlyAnonymousRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !!rest.user && !!rest.user.name && !!rest.token ? (
      <Redirect to={{ pathname: '/' }} />
    ) : (
      <Component {...props} />
    )
  return <Route {...rest} render={func} />
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !!rest.user && !!rest.user.name && !!rest.token ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    )
  return <Route {...rest} render={func} />
}

const types = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }),
  token: PropTypes.string
}

const defaults = {
  location: {
    pathname: ''
  },
  user: null,
  token: ''
}

OnlyAnonymousRoute.propTypes = types
PrivateRoute.propTypes = types

PrivateRoute.defaultProps = defaults
OnlyAnonymousRoute.defaultProps = defaults

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <RouterSelector history={history} location={props.location} context={props.context}>
        <Startup>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/dashboard" component={() => <Dashboard />} />
            <Route exact path="/first" component={() => <Firth />} />
            <Route exact path="/second" component={() => <Second />} />
            <Route exact path="/third" component={() => <Third />} />
            <Route exact path="/forth" component={() => <Forth />} />
            <Route exact path="/fifth" component={() => <Fifth />} />
            <Route exact path="/sixth" component={() => <Sixth />} />
            <Route exact path="/seventh" component={() => <Seventh />} />
            <Route exact path="/eighth" component={() => <Eighth />} />
            <Route exact path="/ninth" component={() => <Ninth />} />
            <Route component={() => <NotFound />} />
          </Switch>
        </Startup>
      </RouterSelector>
    </Provider>
  )
}

export default RootComponent
