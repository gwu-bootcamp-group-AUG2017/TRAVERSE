import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Location from "./pages/Location";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Callback from './components/Callback';
import { requireAuth } from './utils/authService';

const App = () =>
  <Router>
    <div>
      <Nav /> 
      <Header />
    
      <Switch>
        <Route exact path="/" component={Home} onEnter={requireAuth} />

        <Route exact path="/places" component={Location} onEnter={requireAuth} />
        <Route exact path="/saved" component={Saved}  onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />                                                                 
        <Route component={NoMatch} />
      </Switch>
         <Footer /> 
    </div>
  </Router>;

export default App;
