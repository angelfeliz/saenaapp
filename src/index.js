import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css'
import './themes/cosmo-theme.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Home from './Views/Home';
import MainChat from './Views/MainChat';
import CalcContratacionesEmpleado from './Views/CalcContratacionesEmpleado';
import CalcISR from './Views/CalcISR';

const Root = () => (

  <Router>

      <div className="row">
        <div className="col-lg-12">
        <Route  exact path='/' component={MainChat}/>
        <Route  path='/calc_contrataciones_empleado' component={CalcContratacionesEmpleado}/>
        <Route  path='/calc_isr' component={CalcISR}/>      
      </div>
    </div>
  </Router>

)
ReactDOM.render(
  <Root/>, document.getElementById('root'));
