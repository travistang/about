import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';
import { Provider } from "react-redux";
import CV from './pages/CV'
import { BrowserRouter ,Route,Switch } from 'react-router-dom'
ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/cv" component={CV} />
          <Route path="/*" component={App} />
        </Switch>


      </BrowserRouter>
    </Provider>
  ),
   document.getElementById('root'));
registerServiceWorker();
