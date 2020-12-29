//Car Reducer
const carsReducerDefaultState = [];
export default (state = carsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_CAR":
      return [...state, action.car];

    case "REMOVE_CAR":
      return state.filter((car) => car.id !== action.id);
    case "EDIT_CAR":
      return state.map((car) => {
        return car.id === action.id ? { ...car, ...action.updates } : car;
      });
    default:
      return state;
  }
};
