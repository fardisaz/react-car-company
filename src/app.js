import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
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
    price: 6000,
    enteredAt: 1200,
  })
);

store.dispatch(
  addCar({
    brand: "Fiat",
    model: "FIAT 500 ABARTH HATCHBACK 2017",
    price: 5000,
    enteredAt: 1100,
  })
);

store.dispatch(
  addCar({
    brand: "KIA",
    model: "KIA CEED ACCESS WAGON 2014",
    price: 5500,
    enteredAt: 1000,
  })
);

const state = store.getState();
const visibleCars = getVisibleCars(state.cars, state.filters);
console.log(visibleCars);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
