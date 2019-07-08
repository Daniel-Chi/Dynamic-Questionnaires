import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from './pages/Main';
import Flowchart from './pages/FlowChart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect exact from="/login" to="/" />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/index" component={Main} />
          <Route exact path="/flowchart/:id" component={Flowchart} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
