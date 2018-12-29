import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "react-materialize";
import Nav from "./components/Nav"
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Nav/>
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
          <Route exact path="/saved/:id" component={Detail}/>
          <Route component={NoMatch}/>
        </Switch>
      </main>
      <Footer/>
    </div>
  </Router>
)

export default App;
