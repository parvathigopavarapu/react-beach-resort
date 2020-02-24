import React from 'react';
import './App.css';
import Home from './pages/home';
import Error from './pages/error';
import Rooms from './pages/rooms';
import SingleRoom from './pages/singleRoom';
import {Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/rooms' exact component={Rooms}></Route>
        <Route path='/rooms/:slug' exact component={SingleRoom}></Route>
        <Route  component={Error}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
