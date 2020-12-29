import React from "react";
import CarListItem from "./CarListItem";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByPrice } from "../actions/filters";

const CarListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    ></input>
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        const option = e.target.value;
        if (option === "date") {
          props.dispatch(sortByDate());
        } else if (option === "price") {
          props.dispatch(sortByPrice());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="price">Price</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(CarListFilters);
