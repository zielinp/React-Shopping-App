import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart'
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Summary from './components/Summary';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/products" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/summary" component={Summary}/>
                </Switch>
            </div>
       </BrowserRouter>
    );
  }
}

export default App;
