import { v4 as uuid } from "uuid";

//ADD_CAR
export const addCar = ({
  brand = "",
  model = "",
  price = 0,
  enteredAt = 0,
} = {}) => ({
  type: "ADD_CAR",
  car: {
    id: uuid(),
    brand,
    model,
    price,
    enteredAt,
  },
});
//REMOVE_CAR
export const removeCar = ({ id } = {}) => ({
  type: "REMOVE_CAR",
  id,
});
//EDIT_CAR
export const editCar = (id, updates) => ({
  type: "EDIT_CAR",
  id,
  updates,
});
