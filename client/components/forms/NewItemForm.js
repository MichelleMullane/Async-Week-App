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
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addItem({
      brand: this.state.brand,
      price: this.state.price,
      size: this.state.size,
    });
    console.log('thunk sent from newitemform');

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
          <div className="row mx-3">
            <div className="col">
              <label htmlFor="brand" className="form-label">
                Brand:
              </label>
              <input
                name="brand"
                onChange={this.handleChange}
                value={this.state.brand}
                className="form-control"
              />
            </div>
            <div className="col">
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                name="price"
                onChange={this.handleChange}
                value={this.state.price}
                className="form-control"
              />
            </div>
            <div className="col">
              <label htmlFor="size" className="form-label">
                Size:
              </label>
              <input
                name="size"
                onChange={this.handleChange}
                value={this.state.size}
                className="form-control"
              />
            </div>
          </div>
        </form>

        <button
          type="submit"
          onClick={this.handleSubmit}
          className="btn btn-dark mt-3"
        >
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
