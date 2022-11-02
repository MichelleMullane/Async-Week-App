import React from 'react';
import { Bar } from 'react-chartjs-2';
import { getItems } from '../../redux';
import { connect } from 'react-redux';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    this.data = {
      labels: this.labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };
  }

  componentDidMount() {
    this.props.getItems();
    const items = this.props.items;
    console.log('barchart component did mount');
    // this.labels = ['Price'];
    // this.data = {
    //   labels: this.labels,
    //   datasets: [
    //     {
    //       label: `${items[0].brand}`,
    //       backgroundColor: 'rgb(0, 0, 0)',
    //       borderColor: 'rgb(1, 1, 1)',
    //       data: [`${items[0].price}`],
    //     },
    //     {
    //       label: `${items[1].brand}`,
    //       backgroundColor: 'rgb(0, 0, 0)',
    //       borderColor: 'rgb(1, 1, 1)',
    //       data: [`${items[1].price}`],
    //     },
    //   ],
    // };
  }

  render() {
    return (
      <div className="mx-5">
        <Bar data={this.data} />
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

export default connect(mapState, mapDispatch)(BarChart);
