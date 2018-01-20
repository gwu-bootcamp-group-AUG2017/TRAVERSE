import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Location from "./pages/Location";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Callback from './components/Callback';
import { requireAuth } from './utils/authService';

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
       
         <Route exact path="/places" component={Location} />
         <Route exact path="/" component={Home} onLoad={requireAuth} />
         <Route exact path="/places" component={Location} onEnter={requireAuth} />
        <Route exact path="/saved" component={Saved}  onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;




