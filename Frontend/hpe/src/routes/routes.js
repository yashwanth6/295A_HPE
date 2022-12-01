import React, { Component } from "react";
import Register from "../components/auth/Register";
import Landing from '../components/layout/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from "../components/auth/Login";
import Dashboard from "../components/dashboard/Dashboard";


class Routes extends Component {
  render() {
    return (

        
        <div>
        
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
        </div>
        
    );
  }
}

export default Routes;