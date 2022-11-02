import React from 'react';
import { ItemAForm, ItemBForm } from '../forms';
import Table from './Table';

class Pear extends React.Component {
  render() {
    return (
      <div>
        <h1 className="mb-5">Make your comPEARison 🍐</h1>
        <h2>Enter Details for Item A Below:</h2>
        <ItemAForm />
        <h2 className="mt-5">Enter Details for Item B Below:</h2>
        <ItemBForm />
        <Table />
      </div>
    );
  }
}

export default Pear;
