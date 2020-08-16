import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/login" component={Login} />
      {/*<Route path="*" render={() => "404 Not Found!"} /> */}
    </switch>
    /*
    <Switch>
      <Route exact path="/">
       <Authenticated>
        <Dashboard/>
        </Authenticated>
      </Route>
      <Route exact path = "/login">
        <Authenticated nonAuthenticated={true}>
          <Login/>
        </Authenticated>
      </Route>
      <Route path="*" render={()=>"404 Not found!"}/>
      </Switch>
     */
  );
}

export default App;
