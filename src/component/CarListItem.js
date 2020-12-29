import React from "react";
import { connect } from "react-redux";
import { removeCar } from "../actions/cars";

const CarListItem = ({ dispatch, id, brand, model, price, enteredAt }) => (
  <div>
    <h3>
      {brand} - {model}
    </h3>
    <p>
      {price} - {enteredAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeCar({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(CarListItem);
