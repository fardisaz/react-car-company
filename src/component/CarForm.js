import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

export default class CarForm extends React.Component {
  state = {
    brand: "",
    model: "",
    price: "",
    enteredAt: moment(),
    calendarFocused: false,
  };
  onBrandChange = (e) => {
    const brand = e.target.value;
    this.setState(() => ({ brand }));
  };
  onModelChange = (e) => {
    const model = e.target.value;
    this.setState(() => ({
      model,
    }));
  };
  onPriceChange = (e) => {
    const price = e.target.value;
    if (price.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }
  };
  onDateChange = (enteredAt) => {
    this.setState(() => ({
      enteredAt,
    }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Brand"
            autoFocus
            value={this.state.brand}
            onChange={this.onBrandChange}
          ></input>
          <input
            type="number"
            value={this.state.price}
            onChange={this.onPriceChange}
            placeholder="Price"
          ></input>
          <SingleDatePicker
            date={this.state.enteredAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            value={this.state.model}
            onChange={this.onModelChange}
            placeholder="Add the model name"
          />
          <button>Add Car</button>
        </form>
      </div>
    );
  }
}
