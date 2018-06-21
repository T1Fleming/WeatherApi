import * as React from 'react';

import { FirstComponent } from './components/first.component';
import { NavComponent } from './components/nav.component';
import './include/bootstrap';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { SecondComponent } from './components/second.component';
import { Provider } from 'react-redux';
import { store } from './Store';
import { WeatherContainer } from './components/chuck-norris/chuck-norris.container';
// import { WeatherComponent } from './components/chuck-norris/chuck-norris.component';

class App extends React.Component<any, any> {

  public render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <NavComponent />
            <Switch>
              <Route path="/first" component={FirstComponent} />
              <Route path="/second" component={SecondComponent} />
              <Route path="/chuck-norris" component={WeatherContainer} />
              <Route component={FirstComponent} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
