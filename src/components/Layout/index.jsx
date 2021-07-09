import React from 'react'
import Home from '../Home/index.jsx'
import { Route, Switch } from 'react-router'
import Question from '../../components/Question/index.jsx'


function Layout() {
  return (
    <div>
      <Switch>
        <Route path="/question" component={Question} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default Layout
