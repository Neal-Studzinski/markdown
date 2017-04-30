import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Header from './components/header.js';
import EnterPost from './components/enter-post.js';



export default function app() {
    function classNames(location) {
        let classes = ['page-wrapper'];
        if (location.pathname === '/' || location.pathname === '') {
            classes.push('home-view');
        }else {
            classes.push(location.pathname.slice(1, location.pathname.length));
        }
        return classes.join('');
    }
  render(
    <Provider store={store}>
      <Router>
        <Route
            render = {({ location }) => {
                return (
                    <div className = {classNames(location)}>
                        <Header />
                            <Route exact path = '/' component={EnterPost} />
                    </div>
                );
            }}
        />

      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
