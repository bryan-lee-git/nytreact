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
export const Context = React.createContext();

class App extends React.Component {

  state = {}

  render() {
    return (
      <Router>
        <Context.Provider value={{state: this.state}}>
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
            <footer className="page-footer">
              <div class="container"></div>
              <div class="footer-copyright">
                <div class="container hide-on-med-and-down center-align">
                  <span>COPYRIGHT 2018 © BRYAN LEE | UNIVERSITY OF UTAH CODING BOOTCAMP</span>
                </div>
              </div>
            </footer>
          </div>
        </Context.Provider>
      </Router>
    )
  }
}

export default App;
