import React from 'react';
import { Main, Blinker } from 'pages';
import { Route, Switch } from 'react-router-dom';
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
