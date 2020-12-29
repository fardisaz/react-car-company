import React from "react";

export default class CarForm extends React.Component {
  state = {
    brand: "",
    model: "",
    price: "",
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
