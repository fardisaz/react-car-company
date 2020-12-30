import React from "react";
import { connect } from "react-redux";
import { addCar } from "../actions/cars";
import CarForm from "./CarForm";

const AddCarPage = (props) => (
  <div>
    <h1> Add Car</h1>
    <CarForm
      onSubmit={(car) => {
        props.dispatch(addCar(car));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddCarPage);
