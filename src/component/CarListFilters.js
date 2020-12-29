import React from "react";
import CarListItem from "./CarListItem";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

const CarListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    ></input>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(CarListFilters);
