import React from "react";
import { Link } from "react-router-dom";

const CarListItem = ({ id, brand, model, price, enteredAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>
        {brand} - {model}
      </h3>
    </Link>

    <p>
      {price} - {enteredAt}
    </p>
  </div>
);

export default CarListItem;
