import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

export default class CarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: props.car ? props.car.brand : "",
      model: props.car ? props.car.model : "",
      price: props.car ? props.car.price / 100 : "",
      enteredAt: props.car ? moment(props.car.enteredAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }
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
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }
  };
  onDateChange = (enteredAt) => {
    if (enteredAt) {
      this.setState(() => ({
        enteredAt,
      }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.brand || !this.state.model || !this.state.price) {
      this.setState(() => ({
        error: "Please provide brand, model and price!",
      }));
      //Set error state equal to 'Please provide description & amount'
    } else {
      this.setState(() => ({
        error: "",
      }));
      this.props.onSubmit({
        brand: this.state.brand,
        model: this.state.model,
        price: parseFloat(this.state.price, 10) * 100,
        enteredAt: this.state.enteredAt.valueOf(),
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Brand"
            autoFocus
            value={this.state.brand}
            onChange={this.onBrandChange}
          ></input>
          <input
            type="text"
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
