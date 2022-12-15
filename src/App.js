import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";


// import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/Register' component={Register}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
