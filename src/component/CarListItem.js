import React from "react";
import { connect } from "react-redux";

const CarListItem = ({ brand, price, model, enteredAt }) => (
  <div>
    <h3>
      {brand} - {model}
    </h3>
    <p>
      {price} - {enteredAt}
    </p>
  </div>
);

export default CarListItem;
