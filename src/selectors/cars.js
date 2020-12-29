// Get visible cars
export default (cars, { text, sortBy, startDate, endDate }) => {
  return cars
    .filter((car) => {
      const startDateMatch =
        typeof startDate !== "number" || car.enteredAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || car.enteredAt <= endDate;
      const textMatch = car.model.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.enteredAt < b.enteredAt ? 1 : -1;
      } else if (sortBy === "price") {
        return a.price < b.price ? 1 : -1;
      }
    });
};
