import React from "react";

const EditCarPage = (props) => (
  <div>
    <h1>For Editing {props.match.params.id}</h1>
    <p>Edit the car</p>
  </div>
);

export default EditCarPage;
