import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addCar } from "./actions/cars";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { setTextFilter } from "./actions/filters";
import getVisibleCars from "./selectors/cars";

const store = configureStore();

store.dispatch(
  addCar({
    brand: "Fiat",
    model: "FIAT 124 SPIDER ABARTH CONVERTIBLE 2018",
    price: 11110,
    enteredAt: 1200,
  })
);

store.dispatch(
  addCar({
    brand: "Fiat",
    model: "FIAT 500 ABARTH HATCHBACK 2017",
    price: 3340,
    enteredAt: 1100,
  })
);

store.dispatch(setTextFilter("Fiat"));
store.dispatch(setTextFilter("HATCHBACK"));

const state = store.getState();
const visibleCars = getVisibleCars(state.cars, state.filters);
console.log(visibleCars);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
