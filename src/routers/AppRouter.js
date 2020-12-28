import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import CarDashboardPage from "../component/CarDashboardPage";
import NotFoundPage from "../component/NotFoundPage";
import Header from "../component/Header";
import HelpPage from "../component/HelpPage";
import EditCarPage from "../component/EditCarPage";
import AddCarPage from "../component/AddCarPage";

const Approuter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={CarDashboardPage} exact={true} />
        <Route path="/create" component={AddCarPage} />
        <Route path="/edit/:id" component={EditCarPage} exact={true} />

        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Approuter;
