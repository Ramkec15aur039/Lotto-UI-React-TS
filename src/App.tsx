import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";



/* =============== Pages Imports =================== */
import HomePage from "./Pages/Home";
import PlaceYourJackpotBet from "./Pages/PlaceYourJackpotBet";
import JackpotBet from "./Pages/JackpotBet"
import ChooseColor from "./Pages/ChooseColor"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props: any) => <HomePage />} />
          <Route
            exact
            path="/PlaceYourJackpotBet"
            render={(props: any) => <PlaceYourJackpotBet />}
          />
          <Route
            exact
            path="/JackpotBet"
            render={(props: any) => <JackpotBet />}
          />
          <Route
            exact
            path="/ChooseColor"
            render={(props: any) => <ChooseColor />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
