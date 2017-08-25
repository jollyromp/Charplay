import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RoomListContainer from './room/RoomListContainer';
import RoomContainer from './room/RoomContainer';

import RegisterContainer from './modal/RegisterContainer';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={RoomListContainer}/>
      <Route path='/room/:url' component={RoomContainer}/>
      <Route exact path='/register' component={RegisterContainer} />
      <Route path="*" render={() => <h1>Not found</h1>} />
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root')
);
registerServiceWorker();
