import React from 'react';
import Main from './pages/Main';
import './style/main.scss'
import Cart from './pages/Cart';
import Error404 from './pages/Error404';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <Main />} />
        <Route exact path='/cart' render={() => <Cart />} />
        <Route path='*' render={() => <Error404 />} />
      </Switch>
    </div>
  );
}

export default App;
