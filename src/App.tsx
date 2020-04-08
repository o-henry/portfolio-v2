import React from 'react';
import { Main, Blinker } from 'pages';
import { Route, Switch } from 'react-router-dom';
import { animated, config } from 'react-spring'
import { Transition } from 'react-spring/renderprops'

import 'sass/main.scss'

const App: React.FC = () => {
  return (
    <div>
      <Route path="/blinker" component={Blinker} />
      <Route path="/" component={Main} exact={true} />
    </div>
  )

}

export default App;
