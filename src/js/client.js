import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import Layout from "./components/layout";
import Login from "./components/login";
import Posts from "./components/posts";
import Albums from "./components/albums";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import store, {history} from "./store";

const appNode = document.getElementById('app');
const routedApp = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Login}></IndexRoute>
        <Route path="posts" component={Posts}></Route>
        <Route path="albums" component={Albums}></Route>
      </Route>
    </Router>
  </Provider>
)

render(routedApp, appNode);