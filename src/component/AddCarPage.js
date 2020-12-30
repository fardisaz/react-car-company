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
        // this is going to switch us over as if we clicked the link which means we are not going through the full page refresh.It is going to switch over using browser routing
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddCarPage);
