import React, { Component } from "react";
import Register from "../components/auth/Register";
import Landing from '../components/layout/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../reducers/store';


class Routes extends Component {
  render() {
    return (

        
        <div>
        
        <Route path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        </div>
        
    );
  }
}

export default Routes;