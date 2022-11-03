import React from 'react';
import { Bar } from 'react-chartjs-2';
import { getItems } from '../../redux';
import { connect } from 'react-redux';

class Table extends React.Component {
  constructor() {
    super();
    this.data = {};
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const items = this.props.items;
    let data = {};

    if (items.length > 0) {
      const labels = ['Price ($)'];
      const datasets = items.map((item) => {
        let color = Math.floor(Math.random() * (255 - 0) + 0);
        return {
          label: `${item.brand}`,
          backgroundColor: `rgb(${color}, ${color}, ${color})`,
          borderColor: 'rgb(0, 0, 0)',
          data: [`${item.price}`],
        };
      });

      data = {
        labels: labels,
        datasets: datasets.map((dataset) => dataset),
      };
    }

    return (
      <div className="mx-5">
        <table className="table table-dark table-bordered border-light mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Brand</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Size</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <th>{item.brand}</th>
                <th>
                  <img src={item.imageUrl} />
                </th>
                <th>{item.price}</th>
                <th>{item.size}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length > 0 ? (
          <div className="mx-5 my-5">
            <Bar data={data} />
          </div>
        ) : (
          <p>no chart</p>
        )}
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
