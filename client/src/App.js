import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Questionnaire from './pages/Questionnaire';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect exact from="/login" to="/" />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/index" component={Main} />
          <Route exact path="/questionnaire" component={Questionnaire}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
