import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Moovie from "./pages/moovie";
import NFTy from "./pages/nfty";
import Redux from "./pages/redux";
import VibeFore from "./pages/vibeforecast";
import Budget from "./pages/budget";
import Books from "./pages/books";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/moovie" component={Moovie} exact />
        <Route path="/nfty" component={NFTy} exact />
        <Route path="/redux" component={Redux} exact />
        <Route path="/vibe" component={VibeFore} exact />
        <Route path="/budget" component={Budget} exact />
        <Route path="/books" component={Books} exact />
      </Switch>
    </Router>
  );
}

export default App;
