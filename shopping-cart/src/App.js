import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart'
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Summary from './components/Summary';
import Card from './components/Card'
import End from './components/End'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/React-Shopping-App" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/products" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/summary" component={Summary}/>
                    <Route path="/end" component={End}/>
                </Switch>
            </div>
       </BrowserRouter>
    );
  }
}

export default App;
