import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar'
import { Fragment, useEffect } from 'react';
import { Landing } from './components/layout/Landing';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return (
  <Provider>
  <Router>
      <Fragment>
        <Navbar />
          <Route exact path='/' component={Landing}></Route>
          <section className='container'>
        
          </section>
      </Fragment>
  </Router>
  </Provider>
  );
}

export default App;
