import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


import './App.css';
import Home from './pages/Home';
import Catalogue from './pages/product/Catalogue';
import Sets from "./pages/Sets";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from './pages/NotFound';
import Cart from './pages/cart/ShoppingCart';

export default () => (
            <Router>
                <Switch>
                <Route exact path="/" component={Home}/>
                    <Route path="/Catalogue" component={Catalogue} />
                    <Route path="/AboutUs" component={About}/>
                    <Route path='/ContactUs' component={Contact}/>
                    <Route path='/Sets' component={Sets}/>
                    <Route path='/ShoppingCart' component={Cart}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
    );


