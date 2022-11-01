import React from 'react';

class ItemBForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      price: 0,
      description: '',
      url: '',
      size: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      brand: '',
      price: 0,
      description: '',
      imageUrl: '',
      size: '',
      link: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="brand">Brand: </label>
          <input
            name="brand"
            onChange={this.handleChange}
            value={this.state.brand}
          />

          <label htmlFor="price">Price: </label>
          <input
            name="price"
            onChange={this.handleChange}
            value={this.state.price}
          />

          <label htmlFor="size">Size: </label>
          <input
            name="size"
            onChange={this.handleChange}
            value={this.state.size}
          />
        </form>

        <button type="submit">Submit Item B Details</button>
      </div>
    );
  }
}

export default ItemBForm;
