import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Catalogue from './pages/product/Catalogue';
import Sets from "./pages/Sets";
import Contact from "./pages/Contact";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
            <Router>
                <div>
                <Route exact path="/" component={Home}/>
                    <Route path="/Catalogue" component={Catalogue} />
                    <Route path="/AboutUs" component={About}/>
                    <Route path='/ContactUs' component={Contact}/>
                    <Route path='/Sets' component={Sets}/>
                </div>
            </Router>
    );
  }
}

export default App;
