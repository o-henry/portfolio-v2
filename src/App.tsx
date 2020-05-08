//@ts-ignore
//@ts-nocheck
import React from 'react';
import { Main, Blinker, Crunch, Insta, Cookierun, Papaya } from 'pages';
import { NavBar } from 'components';
import { Switch, Route, useLocation } from 'react-router-dom'
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
          <Route path="/crunch" component={Crunch}></Route>
          <Route path="/insta" component={Insta}></Route>
          <Route path="/cookie" component={Cookierun}></Route>
          <Route path="/papaya" component={Papaya}></Route>
        </Switch>
      </animated.div>
    </>
  ))
}

export default App;
