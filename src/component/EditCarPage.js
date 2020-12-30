import React from "react";
import { connect } from "react-redux";
import { editCar } from "../actions/cars";
import CarForm from "./CarForm";
import { removeCar } from "../actions/cars";
const EditCarPage = (props) => {
  return (
    <div>
      <CarForm
        car={props.car}
        onSubmit={(car) => {
          props.dispatch(editCar(props.car.id, car));
          props.history.push("/");
          console.log("updated", car);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeCar({ id: props.car.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    car: state.cars.find((car) => car.id === props.match.params.id),
  };
};
export default connect(mapStateToProps)(EditCarPage);
