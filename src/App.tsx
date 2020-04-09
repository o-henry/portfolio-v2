//@ts-ignore
//@ts-nocheck

import React from 'react';
import { Main, Blinker } from 'pages';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { Transition } from 'react-spring/renderprops'
import { TransitionGroup, CSSTransition } from "react-transition-group";

import 'sass/main.scss'

const App: React.FC = () => {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return transitions.map(({ item: location, props, key }) => (
    <div>
      <animated.div key={key} style={props}>
        <Switch location={location}>
          <Route path="/blinker" component={Blinker}></Route>
          <Route exact path="/" component={Main}></Route>
        </Switch>
      </animated.div>
    </div >
  ))
  //   <Router>
  //   <Switch >
  //     <Route path="/blinker" component={Blinker}></Route>
  //     <Route exact path="/" component={Main}></Route>
  //   </Switch>
  // </Router>
}

export default App;
