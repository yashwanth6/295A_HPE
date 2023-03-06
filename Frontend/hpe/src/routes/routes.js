import React, { Component } from "react";
import Register from "../components/auth/Register";
import Landing from '../components/layout/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from "../components/auth/Login";
import Dashboard from "../components/dashboard/Dashboard";
import ExercisePage from "../components/dashboard/ExercisePage";
import Workout from "../components/dashboard/Workout";
import HandRaise from "../components/dashboard/HandRaise";


class Routes extends Component {
  render() {
    return (

        
        <div>
        
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                {/* <Route exact path="/squat" component={Workout} /> */}
                <Route exact path="/hand" component={HandRaise} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/exercise/:exerciseid/" component={ExercisePage}/>
                
        </div>
        
    );
  }
}

export default Routes;