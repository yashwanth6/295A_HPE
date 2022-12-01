import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes/routes';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <div>
       
       <Provider store={store}>
      <>
        <BrowserRouter>
          <div>
            
            <Routes />
          </div>
        </BrowserRouter>
      </>
    </Provider>
        
    
    </div>
  );
}

export default App;