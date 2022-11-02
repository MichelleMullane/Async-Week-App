import React from 'react';
import { getItems } from '../../redux';
import { connect } from 'react-redux';

class Table extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const items = this.props.items;
    console.log('render items', items);
    return (
      <div>
        <table className="table table-dark table-bordered border-light mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Size</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <th>{item.brand}</th>
                <th>{item.price}</th>
                <th>{item.size}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getItems: () => dispatch(getItems()),
  };
};

export default connect(mapState, mapDispatch)(Table);
