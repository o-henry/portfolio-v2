//@ts-ignore
//@ts-nocheck

import React from 'react';
import { Main, Blinker } from 'pages';
import { NavBar } from 'components';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

import 'sass/main.scss'

const App: React.FC = () => {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, marginTop: -1000, transform: 'translate3d(0,-100%,0)' },
    enter: { opacity: 1, marginTop: 0, transform: 'translate3d(0,0%,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,50%,0)' },
  })

  return transitions.map(({ item: location, props, key }) => (
    <>
      <header>
        <NavBar />
      </header>
      <animated.div key={key} style={props}>
        <Switch location={location}>
          <Route exact path="/" component={Main}></Route>
          <Route path="/blinker" component={Blinker}></Route>
        </Switch>
      </animated.div>
    </>
  ))
}

export default App;
