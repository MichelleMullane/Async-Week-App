import React from 'react';
import { connect } from 'react-redux';
import { createItem } from '../../redux';

class NewItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      price: 0,
      size: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('handleChange state', this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log('handleSubmit');
    event.preventDefault();

    this.props.addItem({
      brand: this.state.brand,
      price: this.state.price,
      size: this.state.size,
    });

    this.setState({
      brand: '',
      price: 0,
      size: '',
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

        <button type="submit" onClick={this.handleSubmit}>
          Submit Item Details
        </button>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addItem: (item) => dispatch(createItem(item)),
  };
};

export default connect(null, mapDispatch)(NewItemForm);
