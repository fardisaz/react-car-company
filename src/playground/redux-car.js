import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

//ADD_CAR
const addCar = ({ brand = "", model = "", price = 0, enteredAt = 0 } = {}) => ({
  type: "ADD_CAR",
  car: {
    id: uuid(),
    brand,
    model,
    price,
    enteredAt,
  },
});
//REMOVE_CAR
const removeCar = ({ id } = {}) => ({
  type: "REMOVE_CAR",
  id,
});
//EDIT_CAR
const editCar = (id, updates) => ({
  type: "EDIT_CAR",
  id,
  updates,
});
//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
//SORT_BY_PRICE
const sortByPrice = () => ({
  type: "SORT_BY_PRICE",
});
//SET_START_DATE
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
//SET_END_DATE
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
//Car Reducer
const carsReducerDefaultState = [];
const carsReducer = (state = carsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_CAR":
      return [...state, action.car];

    case "REMOVE_CAR":
      return state.filter((car) => car.id !== action.id);
    case "EDIT_CAR":
      return state.map((car) => {
        return car.id === action.id ? { ...car, ...action.updates } : car;
      });
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date", //price or date
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_PRICE":
      return { ...state, sortBy: "price" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

// Get visible cars
const getVisibleCars = (cars, { text, sortBy, startDate, endDate }) => {
  return cars
    .filter((car) => {
      const startDateMatch =
        typeof startDate !== "number" || car.enteredAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || car.enteredAt <= endDate;
      const textMatch = car.brand.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.enteredAt < b.enteredAt ? 1 : -1;
      } else if (sortBy === "price") {
        return a.price < b.price ? 1 : -1;
      }
    });
};

//Store creation
const store = createStore(
  combineReducers({ cars: carsReducer, filters: filtersReducer })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleCars = getVisibleCars(state.cars, state.filters);
  console.log(visibleCars);
});

const carOne = store.dispatch(
  addCar({
    brand: "BMW",
    model: "BMW 1-SERIES 118D HATCHBACK 2012",
    price: "100000",
    enteredAt: -21000,
  })
);
const carTwo = store.dispatch(
  addCar({
    brand: "Ferrari",
    model: "FERRARI CALIFORNIA CONVERTIBLE 2014",
    price: "150000",
    enteredAt: -1000,
  })
);
// store.dispatch(removeCar({ id: carOne.car.id }));
// store.dispatch(editCar(carTwo.car.id, { price: 145555 }));

//store.dispatch(setTextFilter("Ferrari"));
// store.dispatch(setTextFilter());

store.dispatch(sortByPrice());
// store.dispatch(sortByDate());
// console.log(carOne);
// console.log(carTwo);

// store.dispatch(setStartDate(0));
// //store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
  cars: [
    {
      id: "sdfsdfdsf",
      brand: "AUDI",
      model: "Audi A1 Ambition",
      enteredAt: 0,
      price: 290000,
    },
  ],
  filters: {
    text: "Audi",
    sortBy: "price", //price or date
    startDate: undefined,
    endDate: undefined,
  },
};

const user = {
  name: "Jen",
  age: 24,
};
console.log({ ...user });
