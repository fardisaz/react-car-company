import { createStore, combineReducers } from "redux";
import carsReducer from "../reducers/cars";
import filtersReducer from "../reducers/filters";

//Store creation
export default()=>{
    const store = createStore(
        combineReducers({ cars: carsReducer, filters: filtersReducer })
      );
      return store;
}



